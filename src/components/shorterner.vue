<template>
	<div class="flex flex-col justify-center items-center w-full">
		<div class="w-4/6 rounded-lg bg-mviolet p-8">
			<form @submit.prevent="shortenURL(url)">
				<div class="flex">
					<input
						type="url"
						name="url"
						id="url"
						placeholder="Shorten a link here.."
						class=" p-2 flex-grow rounded-lg"
						required
						v-model="url"
					/>
					<button
						type="submit"
						class="bg-mcyan text-white px-6 py-2 mx-4 rounded-lg"
					>
						Shorten it!
					</button>
				</div>
			</form>
		</div>
		<div class="w-4/6 my-2">
			<shortened-links
				v-for="(link, index) in links"
				:key="index"
				:link="link"
			/>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import shortenedLinks from "./shortenedLinks.vue";
export default {
	components: {
		shortenedLinks,
	},
	data() {
		return {
			url: "",
			links: [],
		};
	},
	name: "shortener",
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
				console.error(response);
			}
		},
		async shortenURL(url) {
			const response = await this.GET_shorten(url);
			if (response) {
				console.log(response);
				this.links = [...this.links, response.result];
			}
		},
	},
};
</script>

<style></style>
