<template>
  <section class="client-logos" aria-label="Our Clients">
    <div class="marquee-container" @mouseenter="pauseMarquee" @mouseleave="resumeMarquee">
      <div class="marquee-track">
        <!-- Original set + duplicate set for seamless looping -->
        <div v-for="(client, index) in [...clients, ...clients]" :key="`logo-${index}`" class="client-logo">
          <img 
            :src="client.logo" 
            :alt="`${client.name} logo`" 
            width="160" 
            height="80"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const clients = ref([
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/512px-Adobe_Corporate_logo.svg.png' },
]);

const isPaused = ref(false);

const pauseMarquee = () => isPaused.value = true;
const resumeMarquee = () => isPaused.value = false;
</script>

<style scoped>
.client-logos {
  /* background: #f8f9fa; */
  background: transparent;
  padding: 3rem 0;
  margin: 2rem 0;
  overflow: hidden;
  position: relative;
}

.marquee-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.marquee-track {
  display: flex;
  width: fit-content;
  animation: marquee 20s linear infinite;
  animation-play-state: var(--marquee-state, running);
}

.client-logo {
  flex: 0 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}

.client-logo img {
  max-height: 60px;
  width: auto;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.client-logo:hover img {
  filter: grayscale(0);
  opacity: 1;
  transform: scale(1.05);
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-container:hover {
  --marquee-state: paused;
}

@media (max-width: 768px) {
  .client-logo {
    padding: 0 1rem;
  }
  
  .client-logo img {
    max-height: 40px;
  }
}
</style>