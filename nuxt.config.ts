// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from "@primevue/themes/aura";
export default defineNuxtConfig({
  // compatibilityDate: "2024-11-01",
  // devtools: { enabled: true },
  app: {
    head: {
      title:
        process.env.NODE_ENV === "production" ? "Production" : "Development",
      titleTemplate: "%s | Studio Amateur",
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || "http://localhost:3000", // Default fallback
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },

primevue: {
        options: {
            ripple: true,
            inputVariant: 'filled',
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: 'system',
                    cssLayer: false
                }
            }
        }
    },

  compatibilityDate: "2025-01-08",
});