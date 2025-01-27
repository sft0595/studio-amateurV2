<template>
  <section>
    <div>
      <div class="menuBar" @click="showMenu = true">
        <div class="menuIcon">
          <div class="mb-2"></div>
          <div></div>
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
import { ref, onMounted, watch } from "vue";

const showMenu = ref(false); // Track menu visibility

// Refs for elements
const menuWrapper = ref<HTMLElement | null>(null);
const menuLeft = ref<HTMLElement | null>(null);
const menuRight = ref<HTMLElement | null>(null);

// Initialize GSAP animations on mount
onMounted(() => {
  // Set initial positions
  useGsap.set(menuWrapper.value, { zIndex: -1, opacity: 0 });
  useGsap.set(menuLeft.value, { x: "-100%" });
  useGsap.set(menuRight.value, { x: "100%" });
});

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
  top: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(40, 15, 0, 50%);
  justify-content: center;
  border-bottom: .75px solid #F5F5DC;

}
.menuBar > div {
  display: grid;
  justify-content: center;
  padding: 25px;
}
.menuIcon > div {
  width: 50px;
  height: 2px;
  background-color: #F5F5DC;
  color: antiquewhite;
}
</style>
