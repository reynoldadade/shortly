<template>
	<div class="w-full p-8 flex flex-col items-center">
		<div class="text-center w-full text-5xl">
			Advanced Statistics
		</div>
		<div class="w-full md:w-1/2 text-gray-500 text-center">
			Track how your links performing actions across the internet with our
			advanced statistics dahsboard
		</div>
		<div class="w-full flex flex-col md:flex-row p-8 relative">
			<div
				class="w-3/4 h-4 bg-mcyan absolute top-1/2 mx-8 hidden md:block"
			></div>
			<div
				v-for="(info, index) in information"
				:key="index"
				class="px-8"
				:class="{
					'md:pt-4': index === 0,
					'md:pt-8': index === 1,
					'md:pt-12': index === 2,
				}"
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
					message:
						"Boost your brand recognition with each click. Generic links dont mean a thing",
					icon: "fas fa-chart-bar",
				},
				{
					title: "Detailed Records",
					message: "Boost your brand recognition with each click",
					icon: "fas fa-tachometer-alt",
				},
				{
					title: "Fully Customisable",
					message: "Boost your brand recognition with each click",
					icon: "fas fa-chart-bar",
				},
			],
		};
	},
};
</script>

<style></style>
