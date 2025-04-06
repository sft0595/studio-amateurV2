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
			class="researchProcess flex items-center justify-center p-5 overflow-hidden"
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
					v-gsap.from="{
						opacity: 0,
						y: '50%',
						duration: 5,
						scrollTrigger: {
							// If you omit trigger, it will use the element itself as trigger.
							// Alternatively, you can set trigger: $el if supported.
							trigger: '.researchProcess',
							scrub: 1, // Ties the animation progress to scrolling (1 second delay)
							start: 'top top', // Animation starts when the top of the element hits the bottom of the viewport
							toggleActions: 'play none none reverse',
						},
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

		<section
			style="margin: 150px auto; display: flex; flex-direction: column"
			class="overflow-hidden"
		>
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
				v-gsap.from="{
					opacity: 0,
					x: '30%',
					ease: 'power2.out',
					scrollTrigger: {
						scrub: 0.5, // ties animation progress to scrolling (1 second delay)
						toggleActions: 'play none none reverse',
					},
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
				v-gsap.from="{
					opacity: 0,
					x: '-30%',
					ease: 'power2.out',
					scrollTrigger: {
						scrub: 0.5, // ties animation progress to scrolling (1 second delay)
						toggleActions: 'play none none reverse',
					},
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
				v-gsap.from="{
					opacity: 0,
					x: '30%',
					ease: 'power2.out',
					scrollTrigger: {
						scrub: 0.5, // ties animation progress to scrolling (1 second delay)
						toggleActions: 'play none none reverse',
					},
				}"
			>
				<a href="" class="relative block">
					<p class="mx-10 text-5xl underline font-bold" style="color: #f5f5dc">
						Restaurants
					</p>
				</a>
			</div>
			<div
				class="projectHead flex items-center justify-end zoom-container"
				style="
					width: 90%;
					height: 240px;
					background-position: center center;
					background-size: cover;
					background-repeat: no-repeat;
					background-image: url('/assets/images/jtod/jtod (10).jpg');
					margin-right: auto;
				"
				v-gsap.from="{
					opacity: 0,
					x: '-30%',
					ease: 'power2.out',
					scrollTrigger: {
						scrub: 0.5, // ties animation progress to scrolling (1 second delay)
						toggleActions: 'play none none reverse',
					},
				}"
			>
				<a href="" class="relative block">
					<p class="mx-10 text-5xl underline font-bold" style="color: #f5f5dc">
						Paintings
					</p>
				</a>
			</div>
		</section>

	

		<section style="margin: 150px auto; overflow: hidden" class="w-full">
			<div class="lg:flex justify-end items-center">
				<!-- Title -->
				<div class="px-10">
					<p class="lg:text-8xl text-5xl font-bold lg:text-right">
						Director's Message
					</p>
				</div>

				<!-- Image Container -->
				<div
					style="
						max-width: 400px;
						background-image: url('/assets/images/jtod/jtod1.jpg');
						background-size: cover;
						background-position: center center;
					"
					class="m-10 lg:m-0 overflow-hidden"
					v-gsap.from="{
						opacity: 1,
						y: '-5%',
						ease: 'power2.out',
						scrollTrigger: {
							trigger: '.zoom-container', // The image itself is the trigger
							start: 'top', // Start the animation when the top of the element hits the bottom of the viewport
							end: 'center', // Keep zooming as long as the element is moving to the center of the viewport
							scrub: 3, // Smooth animation progress with scroll
						},
					}"
				>
					<img
						class=""
						src="/assets/images/director.png"
						alt="Sharfuddin Mahamood Chowdhury, Director, Studio Amaeteures"
						v-gsap.from="{
							opacity: 1,
							scale: 0.8, // Start zoomed out
							y: '15%',
							ease: 'power2.out',
							scrollTrigger: {
								trigger: '.zoom-container', // The image itself is the trigger
								start: 'top', // Start the animation when the top of the element hits the bottom of the viewport
								end: 'center', // Keep zooming as long as the element is moving to the center of the viewport
								scrub: 3, // Smooth animation progress with scroll
							},
						}"
					/>
				</div>

				<!-- Description -->
				<div class="max-w-3xl">
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
			<CardStack :cards="cards">
				<template #card="{ card, index }">
					<div
						class="content"
						:style="{
							backgroundImage: `url(${card.backgroundImage})` /* ... */,
						}"
					>
						<div class="flex justify-content-around">
							<div class="content-details">
								<h2 class="text-3xl">{{ card.title }}</h2>
								<p>{{ card.content }}</p>
							</div>
							<div class="content-details text-right">
								<p class="text-4xl">
									{{ index + 1 }} / {{ cards.length }}
								</p>
							</div>
						</div>
					</div>
				</template>
			</CardStack>
		</section>

		<section>
			<div
				class="contact-image"
				v-gsap.from="{
					opacity: 0,
					y: '100%',
					duration: 5,
					scrollTrigger: {
						// If you omit trigger, it will use the element itself as trigger.
						// Alternatively, you can set trigger: $el if supported.
						scrub: 1, // Ties the animation progress to scrolling (1 second delay)
						start: 'top top', // Animation starts when the top of the element hits the bottom of the viewport
						toggleActions: 'play none none reverse',
					},
				}"
				style="position: relative"
			>
				<div
					class="absolute"
					style="
						width: 100%;
						height: 100%;
						background: linear-gradient(
							rgb(245, 245, 221, 0.1),
							rgb(245, 245, 221, 0.6)
						);
					"
				></div>

				<img src="/assets/images/footer.jpg" alt="Contact us" class="w-full" />
			</div>

			<!-- <iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.237031242105!2d91.82333167586731!3d22.3446771412843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9a26f6c8d3f%3A0x5e9bcde43e106d04!2sStudio%20Amateur!5e0!3m2!1sen!2sbd!4v1743017367564!5m2!1sen!2sbd"
				class="w-full"
				height="500px"
				style="border: 0"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe> -->
		</section>

		<section style="margin: 150px auto">
			<form action="" style="max-width: 600px; margin: 0 auto">
				<div class="flex justify-content-center align-items-center gap-3 mb-3">
					<InputText class="w-full" placeholder="Full Name" />
					<InputText class="w-full" placeholder="Email" />
				</div>
				<div class="flex justify-content-center align-items-center gap-3">
					<InputText class="w-full" placeholder="Share Your Concerns" />
				</div>

				<Button label="Send Message" icon="pi pi-send" class="mx-auto my-3" />
			</form>
		</section>

		<div>
			<a
				href="https://wa.me/+8801956491391?text=Hello%20I%20have%20a%20question"
				>Chat with us on WhatsApp</a
			>
		</div>
	</section>
</template>

<script setup>
	const currentIndex = ref(0);

	const cards = ref([
		{
			title: "First Card",
			content: "Scroll down to continue",
			backgroundImage:
				"https://images.pexels.com/photos/4041160/pexels-photo-4041160.jpeg?text=Card+1",
		},
		{
			title: "Second Card",
			content: "Keep scrolling",
			backgroundImage:
				"https://images.pexels.com/photos/4041160/pexels-photo-4041160.jpeg?text=Card+2",
		},
		{
			title: "Third Card",
			content: "Almost there",
			backgroundImage:
				"https://images.pexels.com/photos/4041160/pexels-photo-4041160.jpeg?text=Card+3",
		},
		{
			title: "Final Card",
			content: "Last card - scroll down for normal scrolling",
			backgroundImage:
				"https://images.pexels.com/photos/4041160/pexels-photo-4041160.jpeg?text=Card+4",
		},
	]);
</script>

<style scoped>
	.stack-card:nth-child(1) {
		background-color: #ffcccc;
	}
	.stack-card:nth-child(2) {
		background-color: #ccffcc;
	}
	.stack-card:nth-child(3) {
		background-color: #ccccff;
	}
	.stack-card:nth-child(4) {
		background-color: #ffffcc;
	}

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
		background-position: center;
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

	.content {
		width: 100%;
		height: 100%;
		padding: 2rem;
		position: relative;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		color: white; /* Change text color to be visible on images */
		text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8); /* Add shadow for better readability */
	}

	.content::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(80, 48, 27, 0.6);
		top: 0;
		right: 0;
	}

	.content-details {
		width: 100%;
		position: relative;
		z-index: 1;
	}
</style>
