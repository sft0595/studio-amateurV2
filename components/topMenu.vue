<template>
  <section>
    <div style="height: 80px;">
      <div  ref="menuBar" class="menuBar">
        <div class="h-full" style="position: absolute; left: 0; top: 0;">
          <a href="/">
            <img src="../assets/images/logo.png" alt="Studio Amateur" class="h-full" style="height: 70px; padding: 10px" >
          </a>
        </div>

        <div class="menuIcon my-auto h-full" @click="showMenu = true" style="cursor: pointer;">
          <div></div>
          <div></div>
        </div>

        <div class="h-full my-auto" style="position: absolute; right: 0; top:15%; color:#F5F5DC;  padding: 10px">
          <p class="text-xl">ESTD. 2013</p>
        </div>
      </div>
    </div>
    <div
      class="grid md:grid-cols-2"
      style="
        overflow: hidden;
        min-height: 100vh;
        height: 100%;
        position: fixed;
        overflow-y: auto;
        top: 0;
        right: 0;
        z-index: 12;
        background-color: rgba(40, 15, 0, 50%);
        transition: all 0.5s ease-in-out;
      "
      ref="menuWrapper"
    >
      <div ref="menuLeft" :class="$style.menuLeft">
        <ul>
          <li class="text-5xl">Home</li>
          <li class="text-5xl">About</li>
          <li class="text-5xl">Projects</li>
          <li class="text-5xl">Team</li>
          <li class="text-5xl">Contact</li>
        </ul>
      </div>
      <div ref="menuRight" :class="$style.menuRight">
        <div class="flex justify-end">
          <Button
            label="Close"
            icon="pi pi-times-circle"
            class="m-2"
            rounded
            @click="showMenu = false"
          ></Button>
        </div>
        <div class="grid grid-cols-3 gap-3">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, distinctio nemo voluptate maiores modi error provident
            suscipit iusto facilis assumenda placeat quaerat cum excepturi
            explicabo. Praesentium aperiam voluptatem sequi rem!
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, distinctio nemo voluptate maiores modi error provident
            suscipit iusto facilis assumenda placeat quaerat cum excepturi
            explicabo. Praesentium aperiam voluptatem sequi rem!
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, distinctio nemo voluptate maiores modi error provident
            suscipit iusto facilis assumenda placeat quaerat cum excepturi
            explicabo. Praesentium aperiam voluptatem sequi rem!
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, onUnmounted } from "vue";
import { gsap } from "gsap";

const showMenu = ref(false);
const menuWrapper = ref<HTMLElement | null>(null);
const menuLeft = ref<HTMLElement | null>(null);
const menuRight = ref<HTMLElement | null>(null);
const menuBar = ref<HTMLElement | null>(null);
const lastScrollPosition = ref(0);
const isMenuHidden = ref(false);

// Elastic animation configuration
const elasticConfig = {
  duration: 1.2,
  ease: "elastic.out(1, 0.5)",
  y: -100 // slides up 100px
};

const showConfig = {
  duration: 0.8,
  ease: "elastic.out(1, 0.8)",
  y: 0 // returns to original position
};

const handleScroll = () => {
  const currentScroll = window.scrollY;
  const scrollDirection = currentScroll > lastScrollPosition.value ? 'down' : 'up';
  
  // Only trigger if scroll direction changes significantly
  if (Math.abs(currentScroll - lastScrollPosition.value) > 5) {
    if (scrollDirection === 'down' && currentScroll > 100 && !isMenuHidden.value) {
      // Hide with elastic effect
      gsap.to(menuBar.value, {
        ...elasticConfig,
        onStart: () => isMenuHidden.value = true
      });
    } 
    else if ((scrollDirection === 'up' || currentScroll <= 100) && isMenuHidden.value) {
      // Show with elastic effect
      gsap.to(menuBar.value, {
        ...showConfig,
        onComplete: () => isMenuHidden.value = false
      });
    }
  }
  
  lastScrollPosition.value = currentScroll;
};

// Debounce scroll handler
const debouncedScroll = debounce(handleScroll, 20);

onMounted(() => {
  // Initial setup
  gsap.set(menuWrapper.value, { zIndex: -1, opacity: 0 });
  gsap.set(menuLeft.value, { x: "-100%" });
  gsap.set(menuRight.value, { x: "100%" });
  
  // Add optimized scroll listener
  window.addEventListener('scroll', debouncedScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', debouncedScroll);
  gsap.killTweensOf(menuBar.value); // Clean up animations
});

// Simple debounce function
function debounce(func: Function, wait: number) {
  let timeout: number;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

// Watch for changes in `showMenu` and animate accordingly
watch(showMenu, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden"; // Disable scroll after animation finishes
    // Show menu animations using GSAP timeline for synchronization
    const tl = useGsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    tl.set(menuWrapper.value, { zIndex: 100, opacity: 1 })
      .to(menuLeft.value, { x: 0 })
      .to(menuRight.value, { x: 0 }, "<"); // Start both panels at the same time
  } else {
    // Hide menu animations
    const tl = useGsap.timeline({
      defaults: { duration: 1, ease: "power2.in" },
    });
    tl.to(menuLeft.value, { x: "-100%" })
      .to(menuRight.value, { x: "100%" }, "<")
      .set(menuWrapper.value, { zIndex: -1, opacity: 0 })
      .eventCallback("onComplete", () => {
        document.body.style.overflow = "auto"; // Enable scroll after animation finishes
      });
  }
});
</script>

<style module>
.menuLeft {
  background-color: #fbf0da;
  color: #1e1006;
}
.menuLeft > ul > li {
  padding: 50px;
  border-bottom: 0.75px solid #1e1006;
}

.menuRight {
  background-color: #1e1006;
  color: #F5F5DC;
  padding: 0 50px 0 50px;
}
</style>
<style scoped>
.menuBar {
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(40, 15, 0, 50%);
  /* background-color: transparent; */
  justify-content: center;
  border-bottom: .75px solid #F5F5DC;
}
.menuBar > div {
  display: grid;
  justify-content: center;
}

.menuIcon{
  padding: 25px;
}

.menuIcon > div {
  width: 40px;
  height: 2px;
  background-color: #F5F5DC;
  color: antiquewhite;
}
</style>
