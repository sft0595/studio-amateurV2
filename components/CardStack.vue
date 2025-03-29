<template>
  <div class="card-stack-container" ref="container">
    <div class="card-wrapper">
      <div 
        v-for="(card, index) in cards"
        :key="index"
        class="stack-card"
        :style="{
          zIndex: cards.length - index,
          transform: getCardTransform(index),
          transition: activeCard === index ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
        }"
      >
        <slot name="card" :card="card" :index="index"></slot>
      </div>
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
    default: '100vh'
  }
});

const activeCard = ref(0);
const container = ref(null);
const isAnimating = ref(false);

const getCardTransform = (index) => {
  if (index < activeCard.value) {
    return 'translateY(-50%) scale(0.95)';
  }
  if (index > activeCard.value) {
    return 'translateY(100%)';
  }
  return 'translateY(0)';
};

const handleScroll = (e) => {
  if (isAnimating.value) return;
  
  const delta = e.deltaY;
  const previousActive = activeCard.value;

  if (delta > 20 && activeCard.value < props.cards.length - 1) {
    activeCard.value++;
  } else if (delta < -20 && activeCard.value > 0) {
    activeCard.value--;
  }

  if (previousActive !== activeCard.value) {
    isAnimating.value = true;
    setTimeout(() => {
      isAnimating.value = false;
    }, 600);
  }
};

const updateContainerHeight = () => {
  if (container.value) {
    container.value.style.height = `${props.cards.length * window.innerHeight}px`;
  }
};

onMounted(() => {
  updateContainerHeight();
  window.addEventListener('wheel', handleScroll, { passive: false });
  window.addEventListener('resize', updateContainerHeight);
});

onUnmounted(() => {
  window.removeEventListener('wheel', handleScroll);
  window.removeEventListener('resize', updateContainerHeight);
});
</script>

<style scoped>
.card-stack-container {
  position: relative;
  width: 100%;
}

.card-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.stack-card {
  position: absolute;
  width: 100%;
  height: v-bind('props.cardHeight');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  will-change: transform;
  backface-visibility: hidden;
}
</style>