<template>
  <div>
    <section class="regular-content">
      <h1>Content before the card stack</h1>
      <p>Scroll down to start interacting with cards</p>
    </section>

    <CardStack :cards="cards">
      <template #card="{ card }">
        <div class="content" :style="{ backgroundImage: `url(${card.backgroundImage})` }">
          <div class="content-details">
            <h2>{{ card.title }}</h2>
            <p>{{ card.content }}</p>
          </div>
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
  { 
    title: 'First Card', 
    content: 'Scroll down to continue', 
    backgroundImage: 'https://source.unsplash.com/random/800x600?nature' 
  },
  { 
    title: 'Second Card', 
    content: 'Keep scrolling', 
    backgroundImage: 'https://images.pexels.com/photos/4041160/pexels-photo-4041160.jpeg' 
  },
  { 
    title: 'Third Card', 
    content: 'Almost there', 
    backgroundImage: 'https://images.pexels.com/photos/4041160/pexels-photo-4041160.jpeg' 
  },
  { 
    title: 'Final Card', 
    content: 'Last card - scroll down for normal scrolling', 
    backgroundImage: 'https://images.pexels.com/photos/4041160/pexels-photo-4041160.jpeg' 
  }
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

.content {
  width: 100%;
  height: 100%;
  padding: 2rem;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white; /* Change text color to be visible on images */
  text-shadow: 1px 1px 3px rgba(0,0,0,0.8); /* Add shadow for better readability */
}

.content::before{
  content:'';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  top: 0;
  right: 0;
}

.content-details{
  position:absolute;
  z-index: 111;
}
</style>