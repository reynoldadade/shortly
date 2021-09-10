<template>
	<div class="w-full h-full">
		<Header />
		<Hero />
		<Shortener />
		<information />
		<boost />
		<Footer />
	</div>
</template>

<script>
import Header from "./header.vue";
import Hero from "./hero.vue";
import Shortener from "./shorterner.vue";
import information from "./information.vue";
import boost from "./boost.vue";
import Footer from "./footer.vue";
export default {
	components: {
		Header,
		Shortener,
		information,
		boost,
		Footer,
		Hero,
	},
};
</script>

<style></style>
