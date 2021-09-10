<template>
	<div class="flex flex-col justify-center items-center w-full">
		<div class="md:w-4/6 rounded-lg bg-mviolet px-8 py-14 w-full">
			<form @submit.prevent="shortenURL(url)">
				<div class="flex flex-col md:flex-row ">
					<input
						type="url"
						name="url"
						id="url"
						placeholder="Shorten a link here.."
						class=" p-2 md:flex-grow rounded-lg flex-1"
						required
						v-model="url"
					/>
					<button
						type="submit"
						class="bg-mcyan text-white px-6 py-2 md:mx-4 my-4 md:my-0 rounded-lg hover:opacity-75"
					>
						Shorten it!
						<span
							><i
								class="fas fa-spin fa-circle-notch"
								v-if="loading"
							></i
						></span>
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
import Swal from "sweetalert2";
export default {
	components: {
		shortenedLinks,
	},
	data() {
		return {
			url: "",
			links: [],
			loading: false,
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
