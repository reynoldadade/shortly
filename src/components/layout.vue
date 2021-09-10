<template>
	<div>
		<Header />
		<div>
			Hero
		</div>
		<Shortener />
		<information />
		<section>boost your links</section>
		<section>footer</section>
	</div>
</template>

<script>
import Header from "./header.vue";
import Shortener from "./shorterner.vue";
import information from "./information.vue";
export default {
	components: {
		Header,
		Shortener,
		information,
	},
};
</script>

<style></style>
