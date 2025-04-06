<template>
  <div class="card-stack-container" ref="container">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="stack-card"
      :style="cardStyle(index)"
      :data-index="index"
    >
      <slot name="card" :card="card" :index="index"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  cards: {
    type: Array,
    required: true,
  },
  cardHeight: {
    type: String,
    default: "80vh",
  },
  threshold: {
    type: Number,
    default: 0.1,
  },
  activeIndex: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update:activeIndex"]);

const container = ref(null);

const cardStyle = (index) => ({
  height: props.cardHeight,
  top: `${index * 5}vh`,
  zIndex: index,
});

const handleStickyCards = () => {
  const cards = container.value.querySelectorAll(".stack-card");
  const scrollTop = window.scrollY;
  const viewportHeight = window.innerHeight;
  const containerTop = container.value.getBoundingClientRect().top + scrollTop;

  let newActiveIndex = props.activeIndex;

  cards.forEach((card, index) => {
    const cardTop = containerTop + index * (viewportHeight * 0.8);
    const distanceFromTop = scrollTop - cardTop;
    const stackRange = viewportHeight * 0.5;
    const progress = Math.min(Math.max(distanceFromTop / stackRange, 0), 1);

    if (progress > 0) {
      // const scaleFactor = 1 - (props.cards.length - 1 - index) * 0.05 * progress;
      const translateY = -(props.cards.length - 1 - index) * 20 * progress;
      card.style.transform = `scale(${scaleFactor}) translateY(${translateY}px)`;
      card.style.transition = "transform 0.3s ease-out";
    } else {
      card.style.transform = "none";
      card.style.transition = "transform 0.3s ease-out";
    }

    // Set active index based on the card most visible at the top
    if (distanceFromTop >= 0 && distanceFromTop < viewportHeight * 0.8) {
      newActiveIndex = index;
    } else if (index === props.cards.length - 1 && scrollTop >= cardTop) {
      newActiveIndex = index; // Ensure last card is active when scrolled past
    }
  });

  if (newActiveIndex !== props.activeIndex) {
    emit("update:activeIndex", newActiveIndex);
  }
};

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const debouncedHandleStickyCards = debounce(handleStickyCards, 10);

onMounted(() => {
  container.value.style.height = `${props.cards.length * 100}vh`;
  window.addEventListener("scroll", debouncedHandleStickyCards);
});

onUnmounted(() => {
  window.removeEventListener("scroll", debouncedHandleStickyCards);
});
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

.card-stack-container {
  position: relative;
  width: 100%;
}

.stack-card {
  position: sticky;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  transform-origin: center top;
}
</style>