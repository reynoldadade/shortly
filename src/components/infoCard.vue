<template>
	<div class=" shadow p-4 bg-white relative">
		<div
			class="absolute rounded-full border bg-mdarkblue -top-5 left-5 w-10 h-10 p-1"
		>
			<img src="@/assets/images/icon-fully-customizable.svg" alt="logo" />
		</div>
		<div>
			{{ info.title }}
		</div>
		<div class="text-sm">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
			architecto vel! Obcaecati praesentium provident pariatur earum a
			dolores eius et! Aliquam, sequi consectetur voluptatum labore
			laborum culpa distinctio facere deleniti!
		</div>
	</div>
</template>

<script>
export default {
	props: {
		info: Object,
	},
};
</script>

<style></style>
