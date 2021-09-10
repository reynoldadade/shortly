<template>
	<div>
		<Header />
		<div>
			Hero
		</div>
		<Shortener />
		<section>
			information
		</section>
		<section>boost your links</section>
		<section>footer</section>
	</div>
</template>

<script>
import Header from "./header.vue";
import Shortener from "./shorterner.vue";
export default {
	components: {
		Header,
		Shortener,
	},
};
</script>

<style></style>
