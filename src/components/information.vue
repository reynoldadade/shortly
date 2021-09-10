<template>
	<div class="w-full h-80 border-2 border-red-500">
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
				v-bind:class="{
					'translate-y-4': index === 0,
					'translate-y-8': index === 1,
					'translate-y-12': index === 2,
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
