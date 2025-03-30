<template>
  <div class="card-stack-container" ref="container">
    <div 
      v-for="(card, index) in cards"
      :key="index"
      class="stack-card"
      :style="cardStyle(index)"
    >
      <slot name="card" :card="card" :index="index"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  cards: {
    type: Array,
    required: true
  },
  cardHeight: {
    type: String,
    default: '80vh'
  },
  threshold: {
    type: Number,
    default: 0.8
  }
});

const container = ref(null);
const activeCard = ref(0);
const isScrolling = ref(false);
const lastScroll = ref(0);

const cardStyle = (index) => ({
  height: props.cardHeight,
  transform: `translateY(${(index - activeCard.value) * 100}%)`,
  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  zIndex: props.cards.length - Math.abs(index - activeCard.value)
});

const isContainerInView = () => {
  const rect = container.value.getBoundingClientRect();
  return (
    rect.top < window.innerHeight * props.threshold &&
    rect.bottom > window.innerHeight * (1 - props.threshold)
  );
};

const handleScroll = (e) => {
  if (isScrolling.value) return;
  
  const delta = e.deltaY;
  const direction = delta > 0 ? 1 : -1;
  const containerVisible = isContainerInView();

  if (!containerVisible) return;

  e.preventDefault();
  isScrolling.value = true;

  const newIndex = Math.min(
    Math.max(activeCard.value + direction, 0),
    props.cards.length - 1
  );

  if (newIndex !== activeCard.value) {
    activeCard.value = newIndex;
    window.scrollTo({
      top: container.value.offsetTop + (newIndex * window.innerHeight),
      behavior: 'smooth'
    });
  }

  setTimeout(() => {
    isScrolling.value = false;
  }, 600);
};

onMounted(() => {
  container.value.style.height = `${props.cards.length * 100}vh`;
  window.addEventListener('wheel', handleScroll, { passive: false });
});

onUnmounted(() => {
  window.removeEventListener('wheel', handleScroll);
});
</script>

<style scoped>
.card-stack-container {
  position: relative;
  width: 100%;
  scroll-snap-type: y mandatory;
}

.stack-card {
  position: sticky;
  top: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin: 10vh 0;
  scroll-snap-align: start;
}
</style>