<template>
	<div class="w-full h-full">
		<Header />
		<Hero />
		<Shortener :shortenURL="shortenURL" :loading="loading" :links="links" />
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
import axios from "axios";
import Swal from "sweetalert2";
export default {
	components: {
		Header,
		Shortener,
		information,
		boost,
		Footer,
		Hero,
	},
	data() {
		return {
			links: [],
			loading: false,
		};
	},
	name: "main-page",
	methods: {
		async GET_shorten(url) {
			try {
				const response = await axios.get(
					"https://api.shrtco.de/v2/shorten",
					{
						params: {
							url,
						},
					}
				);
				return response.data;
			} catch ({ response }) {
				return response.data;
			}
		},
		async shortenURL(url) {
			this.loading = true;
			const response = await this.GET_shorten(url);
			if (response.ok) {
				this.links = [...this.links, response.result];
				Swal.fire({
					title: "Success!",
					text: `Link Generated`,
					icon: "success",
				});
			} else {
				Swal.fire({
					title: "Error!",
					text: `${response.error}`,
					icon: "error",
				});
			}
			this.loading = false;
		},
	},
};
</script>

<style></style>
