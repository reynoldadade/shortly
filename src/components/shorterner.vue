<template>
	<div class="flex justify-center w-full">
		<div class="w-4/6 rounded-lg bg-mviolet p-8">
			<form @submit.prevent="">
				<div class="flex">
					<input
						type="url"
						name="url"
						id="url"
						placeholder="Shorten a link here.."
						class=" p-2 flex-grow rounded-lg"
						required
					/>
					<button
						class="bg-mcyan text-white px-6 py-2 mx-4 rounded-lg"
					>
						Shorten it!
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "shortener",
	methods: {
		async GET_shorten(url) {
			try {
				const response = await axios.$get(
					"https://api.shrtco.de/v2/shorten",
					{
						params: {
							url,
						},
					}
				);
				return response.data;
			} catch ({ response }) {}
		},
		shortenURL(url) {
            const response = await this.GET_shorten(url);
            if(response){
                console.log(response)
            }
        },
	},
};
</script>

<style></style>
