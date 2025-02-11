<template>
  <section>
    <div class="headshot-container mt-5 mb-8">
      <div
        class="left-align-headshot w-full md:w-3/5"
        v-gsap.whenVisible.once.from="{
          x: '-100%',
          ease: 'power2.out',
          duration: 1,
        }"
      ></div>
      <div
        class="right-align-headshot w-full md:w-1/2"
        v-gsap.whenVisible.once.from="{
          x: '100%',
          ease: 'power2.out',
          duration: 1,
        }"
      >
        <div
          class="md:absolute relative"
          style="left: 50%; top: 30%; transform: translate(-50%, -30%)"
          v-gsap.whenVisible.once.from="{
            x: '100%',
            ease: 'power2.out',
            duration: 1.3,
            delay: 0.3,
          }"
        >
          <p class="fontSquad text-8xl align-top font-bold">Live</p>
          <span class="fontSquad text-5xl align-top">in</span>
          <span class="fontSquad text-8xl align-top font-bold">Art </span>
          <p class="text-xl">
            Your own house is a place where anyone can find his/her peace of
            mind. To make it more comfortable the house needs to be well
            decorated where he/she will find the desired design with natural air
            and lights.
          </p>
        </div>
      </div>
    </div>

    <article
      class="flex items-center justify-center p-5 overflow-hidden"
      style="max-width: 1200px; margin: 150px auto"
      v-gsap.whenVisible.from="{ scale: 0.8, height: 0, padding: 0 }"
    >
      <div
        class="flex-none"
        style="width: 30%"
        v-gsap.whenVisible.from="{ y: 100, duration: 2, ease: 'power2.in' }"
      >
        <img
          src="/assets/images/bg/clientThink.webp"
          alt="What we think about client"
        />
      </div>
      <div
        v-gsap.whenVisible.delay-1000.stagger.from="{
          opacity: 0,
          x: '100%',
          delay: 0.5,
          duration: 2,
          ease: 'power2.inOut',
          scale: 1,
        }"
        class="flex-auto p-5"
      >
        <div
          class="text-3xl md:text-5xl"
          style="transform: translateX(0%); letter-spacing: 0.5rem"
        >
          WE THINK
        </div>
        <div
          class="text-5xl lg:text-8xl font-bold"
          style="transform: translateX(-8%)"
        >
          About Each Client
        </div>
        <div class="text-xl my-5">
          <p>
            In this age of the internet, a design can be easily obtainable. Some
            of them can meet our needs. But when we try to implement it into our
            space, we face many kinds of problems. In Studio Amateur we try to
            be acquainted with client’s needs and tastes. We try to get a sense
            of the client’s mentality and unique taste.
          </p>
          <!-- <p>
            We try to take note of what kind of resource that specific space
            has. If it has enough light or air circulation. Is there sufficient
            walking space or is the privacy being maintained? Also, we try to
            inquire about how much control the client needs with temperature,
            smoke, odor and waste. Try to know how much maneuvering they need in
            their space. After knowing all that we try to design the perfect
            space for the client.
          </p>
          <p>
            We try to keep the client engaged in every step of our process. We
            first design a 2d plan with keeping the client’s needs in mind.
            After several times refining it and getting approval from the client
            we start the second step of the process which is 3d visualization
            and animation. Here the client can fully visualize his space,
            design, lighting, furniture & utility. Then we further refine our
            design by consulting with the client. When that design is approved,
            we give a quotation based on our design. After signing the contract,
            we start building the client’s perfect space.
          </p> -->
        </div>
        <div>
          <Button label="Learn More" text icon="pi pi-arrow-right"></Button>
        </div>
      </div>
    </article>

    <section style="margin: 150px auto">
      <div class="lg:flex justify-end align-baseline">
        <div class="px-10">
          <p class="lg:text-8xl text-5xl font-bold lg:text-right">
            The Research Process
          </p>
        </div>
        <div
          style="
            min-width: 350px;
            min-height: 400px;
            background-image: url('/assets/images/creative-min.jpg');
            background-size: cover;
            background-position: bottom, center;
            background-repeat: no-repeat;
          "
          class="m-10 lg:m-0 overflow-hidden"
          v-gsap.whenVisible.from="{
            opacity: 0,
            y: '40%',
            start: 'top 80%',
            duration: 2,
          }"
        >
          <!-- <img
            class="w-full hidden lg:block"
            src="/assets/images/creative-min.jpg"
            alt="Chatta Metro Restaurant chittagong, chattogram"
          /> -->
        </div>
        <div class="" style="max-width: 900px">
          <div class="px-10 mb-10">
            <p class="text-3xl font-bold mb-3">Space Research</p>
            <p class="text-xl text-justify">
              We have to research space to make your house, office, restaurant,
              shopping mall, hotel or any space usable and aesthetic. To do this
              research we follow a few steps, such as first we visit your space
              and collect its blueprint with measurement and then we do 2D
              planning in our studio considering the client’s best interest, and
              then we transform it into 3D for visualization.
            </p>
          </div>
          <div class="px-10 mb-10">
            <p class="text-3xl font-bold mb-3">Material Research</p>
            <p class="text-xl text-justify">
              Martial play an important role in the implementation of work. In
              most cases, it is seen that due to not knowing the proper use of
              the material according to the place, it gets wasted very quickly
              or become unusable. In that case, before using the material,
              Studio Amateur test the material in its studio to determine its
              durability, usability, aesthetics and various advantage and
              disadvantage. The Studio Amateur uses its materials after being
              100% sure about it. No one can 100% guarantee about a material
              (usually wood falls in this category) acquired from a natural
              source. In that case, Studio Amateur takes appropriate measures to
              ensure its quality before use.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section style="display: flex; flex-direction: column">
      <div
        class="projectHead flex items-center justify-start"
        style="
          width: 90%;
          height: 240px;
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url('/assets/images/bg/apartments.webp');
          margin-left: auto;
          margin-right: 0;
        "
        v-gsap.whenVisible.from="{
          opacity: 0,
          x: '40%',
          start: 'top 80%',
          duration: 2,
        }"
      >
        <a href="" class="relative block">
          <p class="mx-10 text-5xl underline font-bold" style="color: #f5f5dc">
            Appartments
          </p>
        </a>
      </div>

      <div
        class="projectHead flex items-center justify-end"
        style="
          width: 90%;
          height: 240px;
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url('/assets/images/bg/Office-Interior.jpg');
          margin-right: auto;
        "
        v-gsap.whenVisible.delay-1000.from="{
          opacity: 0,
  x: '-40%',
          start: 'top 80%',
          duration: 2,
        }"
      >
        <a href="" class="relative block">
          <p class="mx-10 text-5xl underline font-bold" style="color: #f5f5dc">
            Office Interior
          </p>
        </a>
      </div>

      <div
        class="projectHead flex items-center justify-start"
        style="
          width: 90%;
          height: 240px;
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url('/assets/images/bg/restaurants.webp');
          margin-left: auto;
        "
        v-gsap.whenVisible.from="{
          opacity: 0,
  x: '40%',
          start: 'top 80%',
          duration: 2,
        }"
      >
        <a href="" class="relative block">
          <p class="mx-10 text-5xl underline font-bold" style="color: #f5f5dc">
            Restaurants
          </p>
        </a>
      </div>
      <div
        class="projectHead flex items-center justify-end"
        style="
          width: 90%;
          height: 240px;
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url('/assets/images/j to d/jtod (10).jpg');
          margin-right: auto;
        "
        v-gsap.whenVisible.from="{
          opacity: 0,
  x: '-40%',
          start: 'top 80%',
          duration: 2,
        }"
      >
        <a href="" class="relative block">
          <p class="mx-10 text-5xl underline font-bold" style="color: #f5f5dc">
            Paintings
          </p>
        </a>
      </div>
    </section>

    <section style="margin-top: 150px">
      <div class="lg:flex justify-end items-center">
        <!-- Title -->
        <div class="px-10">
          <p
            class="lg:text-8xl text-5xl font-bold lg:text-right"
            v-gsap.whenVisible.from="{ opacity: 0, x: '-40%' }"
          >
            Director's Message
          </p>
        </div>

        <!-- Image Container -->
        <div
          style="max-width: 400px"
          class="m-10 lg:m-0 overflow-hidden"
          v-gsap.whenVisible.from="{ opacity: 0, start: 'top 80%', y: '40%' }"
        >
          <img
            src="/assets/images/director.png"
            alt="Chatta Metro Restaurant chittagong, chattogram"
          />
        </div>

        <!-- Description -->
        <div
          class="max-w-3xl"
          v-gsap.whenVisible.from="{ opacity: 0, start: 'top 80%', x: '40%' }"
        >
          <div class="px-10 mb-10">
            <p class="text-xl text-justify">
              <i>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                nam ducimus aliquid, fugiat quos, hic nihil perspiciatis laborum
                sint optio iste assumenda tenetur itaque voluptatum provident
                dicta sapiente quidem porro? Repellendus quia dignissimos eius
                porro omnis, incidunt ad dolore reiciendis ipsa aspernatur
                officia totam ullam delectus quas quos molestiae ut nemo dolores
                ea facilis rem! Eligendi ratione magni at alias! Numquam
                eligendi nihil quas suscipit rem animi, dolorum magni eveniet
                illo mollitia laboriosam quasi sequi provident, ullam quo!
                Provident quo voluptate at mollitia, consequatur reiciendis
                delectus quidem dicta vitae itaque. Explicabo natus tempora ad
                aliquam accusantium quisquam ipsam doloremque in debitis earum,
                asperiores incidunt numquam laborum hic provident consequuntur
                fugiat beatae? Facere, vel deserunt! At blanditiis quidem fugit
                sit nihil! Repellendus vero aliquam ab rerum incidunt
                exercitationem voluptas quas delectus rem molestias. Aspernatur
                eaque ex tempora quidem soluta. Eum, deleniti ut.
              </i>
              <br /><br />
              - Sharfuddin Mahamood Chowdhury
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="contact-image">
        <img src="/assets/images/footer.jpg" alt="Contact us" class="w-full" />
      </div>
    </section>

    <div class="" style="height: 1000px">AAAA</div>
  </section>
</template>
<style module>
.myinput {
  border-radius: 2rem;
  padding: 1rem 2rem;
  border-width: 2px;
}
</style>
<style scoped>
.headshot-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
}
.left-align-headshot {
  height: 500px;
  position: absolute;
  left: 0;
  top: 50px;
  background-image: url("~/assets/images/bg/lightbg.jpg");
  background-position: center center;
  background-size: cover;
  z-index: 2;
}
.right-align-headshot {
  height: 500px;
  position: absolute;
  right: 0;
  bottom: 50px;
  border-radius: 0;
  background-color: #1e1005;
  color: #f5f5dc;
  z-index: 1;
}

/* .fontSquad {
  font-family: "Squada One", serif;
} */

.projectHead {
  margin-top: 2px;
}
.projectHead:nth-child(odd)::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: linear-gradient(-90deg, rgba(80, 48, 27, 0.8), transparent);
}

.projectHead:nth-child(even)::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: linear-gradient(-90deg, rgba(80, 48, 27, 0.8), transparent);
}
</style>
