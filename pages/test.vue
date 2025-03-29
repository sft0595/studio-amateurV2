<template>
  <div>
    
    <CardStack :cards="sections">
      <template #card="{ card, index }">
        <div class="card-content" :style="{ backgroundColor: colors[index] }">
          <h2>{{ card.title }}</h2>
          <p>{{ card.content }}</p>
        </div>
      </template>
    </CardStack>
  </div>
</template>

<script setup>
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
const sections = ref([
  { title: 'First Card', content: 'Scroll down to continue' },
  { title: 'Second Card', content: 'Keep scrolling' },
  { title: 'Third Card', content: 'Almost there' },
  { title: 'Last Card', content: 'Scroll up to go back' }
]);
</script>

<style>
.card-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 15px;
}

h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: #666;
}
</style>