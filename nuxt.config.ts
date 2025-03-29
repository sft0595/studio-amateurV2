// https://nuxt.com/docs/api/configuration/nuxt-config
import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";

const MyPreset = definePreset(Aura, {
  semantic: {
    transitionDuration: ".5s",
    focusRing: {
      width: "0",
      style: "solid",
      color: "{primary.color}",
      offset: "0",
      shadow: "none",
    },
    iconSize: "1rem",
    anchorGutter: "0",
    primary: {
      0: "#ffffff",
      50: "#F5F5DC",
      100: "#fff7ee",
      200: "#ccc5bf",
      300: "#e6ac6b",
      400: "#9C7443",
      500: "#4c4947",
      600: "#3e3b3b",
      700: "#232121",
      800: "#262626",
      900: "#1F1005",
      950: "#140a05",
    },
    formField: {
      background: "{primary.50}",
      disabledBackground: "{surface.700}",
      filledBackground: "{surface.800}",
      filledFocusBackground: "{surface.800}",
      borderColor: "{surface.500}",
      hoverBorderColor: "{surface.500}",
      focusBorderColor: "{surface.500}",
      invalidBorderColor: "{red.400}",
      color: "{surface.600}",
      disabledColor: "{surface.400}",
      placeholderColor: "{surface.400}",
      floatLabelColor: "{surface.400}",
      floatLabelFocusColor: "{surface.400}",
      floatLabelInvalidColor: "{red.400}",
      iconColor: "{surface.0}",
      shadow: "none",
      paddingX: "0.75rem",
      paddingY: "0.5rem",
      borderRadius: "{border.radius.xs}",
      focusRing: {
        width: "2px",
        style: "solid",
        color: "{primary.color}",
        offset: "-1px",
        shadow: "none",
      },
      transitionDuration: "{transition.duration}",
    },
    list: {
      padding: "0.125rem 0",
      gap: "0",
      header: {
        padding: "0.5rem 0.75rem 0.375rem 0.75rem",
      },
      option: {
        padding: "0.5rem 0.75rem",
        borderRadius: "0",
      },
      optionGroup: {
        padding: "0.5rem 0.75rem",
        fontWeight: "700",
      },
    },
    content: {
      borderRadius: "{border.radius.xs}",
    },
    mask: {
      transitionDuration: "0.15s",
    },
    navigation: {
      list: {
        padding: "0.125rem 0",
        gap: "0",
      },
      item: {
        padding: "0.5rem 0.75rem",
        borderRadius: "0",
        gap: "0.5rem",
      },
      submenuLabel: {
        padding: "0.5rem 0.75rem",
        fontWeight: "700",
      },
      submenuIcon: {
        size: "0.875rem",
      },
    },
    overlay: {
      select: {
        borderRadius: "{border.radius.xs}",
        shadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
      },
      popover: {
        borderRadius: "{border.radius.xs}",
        padding: "0.75rem",
        shadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
      },
      modal: {
        borderRadius: "{border.radius.xs}",
        padding: "1.25rem",
        shadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
      navigation: {
        shadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
      },
    },

    colorScheme: {
      dark: {
        surface: {
          0: "#ffffff",
          50: "#F5F5DC",
          100: "#fff7ef",
          200: "#ccc5bf",
          300: "#e6ac6b",
          400: "#9C7443",
          500: "#4c4947",
          600: "#3e3b3b",
          700: "#232121",
          800: "#262626",
          900: "#1e1005",
          950: "#140a05",
        },
        primary: {
          color: "{primary.400}",
          contrastColor: "{surface.50}",
          hoverColor: "{primary.300}",
          activeColor: "{primary.300}",
        },
        highlight: {
          background: "{primary.900}",
          focusBackground: "{primary.900}",
          color: "{primary.900}",
          focusColor: "{primary.900}",
        },
        mask: {
          color: "{surface.200}",
        },
        formField: {
          background: "{primary.50}",
          disabledBackground: "{surface.700}",
          filledBackground: "{surface.800}",
          filledFocusBackground: "{surface.800}",
          borderColor: "{surface.500}",
          hoverBorderColor: "{surface.500}",
          focusBorderColor: "{surface.500}",
          invalidBorderColor: "{red.400}",
          color: "{surface.4000}",
          disabledColor: "{surface.400}",
          placeholderColor: "{surface.400}",
          floatLabelColor: "{surface.400}",
          floatLabelFocusColor: "{surface.400}",
          floatLabelInvalidColor: "{red.400}",
          iconColor: "{surface.0}",
          shadow: "none",
        },
        text: {
          color: "{surface.900}",
          hoverColor: "{surface.900}",
          mutedColor: "{surface.900}",
          hoverMutedColor: "{surface.900}",
        },
        content: {
          background: "{surface.50}",
          hoverBackground: "{surface.0}",
          borderColor: "{surface.900}",
          color: "{text.color}",
        },
        overlay: {
          select: {
            background: "{surface.900}",
            borderColor: "{surface.900}",
            color: "{text.color}",
          },
          popover: {
            background: "{surface.900}",
            borderColor: "{surface.900}",
            color: "{text.color}",
          },
          modal: {
            background: "{surface.900}",
            borderColor: "{surface.900}",
            color: "{text.color}",
          },
        },
        list: {
          option: {
            focusBackground: "{surface.900}",
            selectedBackground: "{highlight.background}",
            selectedFocusBackground: "{highlight.focus.background}",
            color: "{surfacr.900}",
            focusColor: "{text.hover.color}",
            selectedColor: "{highlight.color}",
            selectedFocusColor: "{highlight.focus.color}",
            icon: {
              color: "{text.muted.color}",
              focusColor: "{text.hover.muted.color}",
            },
          },
          optionGroup: {
            background: "transparent",
            color: "{text.color}",
          },
        },
        navigation: {
          item: {
            focusBackground: "{surface.50}",
            activeBackground: "{surface.50}",
            color: "{text.color}",
            focusColor: "{primary.950}",
            activeColor: "{primary.950}",
            icon: {
              color: "{text.muted.color}",
              focusColor: "{primary.950}",
              activeColor: "{text.hover.muted.color}",
            },
          },
          submenuLabel: {
            background: "transparent",
            color: "{text.color}",
          },
          submenuIcon: {
            color: "{text.muted.color}",
            focusColor: "{primary.950}",
            activeColor: "{text.hover.muted.color}",
          },
        },
      },
    },
  },
});

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

  modules: [
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "@nuxt/fonts",
    "v-gsap-nuxt",
    "@hypernym/nuxt-gsap",
  ],

  gsap: {
    composables: true,
    provide: false,
  },

  vgsap: {
    presets: [],
    breakpoint: 768,
    scroller: "",
    composable: true,
  },

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
      theme: {
        preset: MyPreset,
        options: {
          prefix: "p",
          darkModeSelector: "system",
        },
      },
    },
  },
  css: ["primeicons/primeicons.css"],
  fonts: {
    defaults: {
      weights: [300, 400, 700],
      styles: ["normal", "italic"],
    },
  },
  compatibilityDate: "2025-01-08",
});