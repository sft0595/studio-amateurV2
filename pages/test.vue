<template>
  <div>
    <section class="regular-content">
      <h1>Content before the card stack</h1>
      <p>Scroll down to start interacting with cards</p>
    </section>

    <CardStack :cards="cards">
    <template #card="{ card }">
      <div class="content" :style="{ background: card.color }">
        <h2>{{ card.title }}</h2>
        <p>{{ card.content }}</p>
      </div>
    </template>
  </CardStack>

    <section class="regular-content">
      <h1>Content after the card stack</h1>
      <p>This will only become scrollable after all cards are viewed</p>
    </section>
  </div>
</template>

<script setup>

const cards = ref([
  { title: 'First Card', content: 'Scroll down to continue', color: '#FFB3BA' },
  { title: 'Second Card', content: 'Keep scrolling', color: '#BAFFC9' },
  { title: 'Third Card', content: 'Almost there', color: '#BAE1FF' },
  { title: 'Final Card', content: 'Last card - scroll down for normal scrolling', color: '#FFFFBA' }
]);
</script>

<style>
.regular-content {
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.custom-card {
  width: 80%;
  height: 80%;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
}
</style>