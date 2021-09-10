<template>
	<div class="w-full container">
		<div>
			Advanced Statistics
		</div>
		<div>
			Track how your links performing actions across the internet with our
			advanced statistics dahsboard
		</div>
		<div class="w-full flex">
			<div
				v-for="(info, index) in information"
				:key="index"
				class="p-8  transform"
			>
				<info-card :info="info" />
			</div>
		</div>
	</div>
</template>

<script>
import infoCard from "./infoCard.vue";
export default {
	components: {
		infoCard,
	},
	data() {
		return {
			information: [
				{
					title: "Brand Recognition",
					message: "Boost your brand recognition with each click",
				},
				{
					title: "Detailed Records",
					message: "Boost your brand recognition with each click",
				},
				{
					title: "Fully Customisable",
					message: "Boost your brand recognition with each click",
				},
			],
		};
	},
};
</script>

<style></style>
