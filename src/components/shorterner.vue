<template>
	<div class="flex flex-col justify-center items-center w-full m-2">
		<div
			class="md:w-4/6 rounded-lg bg-mviolet px-8 py-14 w-full"
			id="shortener"
		>
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
		<div class="w-full md:w-4/6  m-1 md:my-2">
			<shortened-links
				v-for="(link, index) in links"
				:key="index"
				:link="link"
				:selectedLink="selectedLink"
				:copyText="copyText"
			/>
		</div>
	</div>
</template>

<script>
// import axios from "axios";
import shortenedLinks from "./shortenedLinks.vue";
// import Swal from "sweetalert2";
export default {
	components: {
		shortenedLinks,
	},
	data() {
		return {
			url: "",
			// links: [],
			// loading: false,
		};
	},
	props: {
		shortenURL: Function,
		loading: Boolean,
		links: Array,
		selectedLink: String,
		copyText: Function,
	},
	name: "shortener",
};
</script>

<style scoped>
#shortener {
	background-image: url("../assets/images/bg-boost-desktop.svg");
}
</style>
