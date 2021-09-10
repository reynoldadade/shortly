<template>
	<div class="w-full p-2 flex justify-between">
		<div class="flex w-1/2 justify-between">
			<img src="/src/assets/images/logo.svg" alt="Shortly" />
			<div>
				<a href="http://" v-for="link in links" :key="link">{{
					link
				}}</a>
			</div>
		</div>
		<div>
			<button class="rounded-full p-2  ">Login</button>
			<button class="rounded-full py-1 px-4 text-white bg-mcyan">
				Sign up
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: ["Features", "pricing", "Resources"],
		};
	},
};
</script>

<style></style>
