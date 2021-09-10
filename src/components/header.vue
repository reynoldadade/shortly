<template>
	<div class="w-full  flex justify-between p-8">
		<div class="flex w-1/2 justify-center px-8">
			<img src="@/assets/images/logo.svg" alt="Shortly" />
			<div class="px-4 text-mgrayV">
				<a
					href="http://"
					v-for="link in links"
					:key="link"
					class="p-2"
					>{{ link }}</a
				>
			</div>
		</div>
		<div class="px-8">
			<button class="rounded-full p-2  text-mgrayV hover:text-gray-700">
				Login
			</button>
			<button
				class="rounded-full py-1 px-4 text-white bg-mcyan hover:opacity-75"
			>
				Sign up
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: ["Features", "Pricing", "Resources"],
		};
	},
};
</script>

<style></style>
