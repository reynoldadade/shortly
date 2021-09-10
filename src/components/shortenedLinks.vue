<template>
	<div
		class="w-full p-2 bg-white rounded-lg flex justify-between shadow-lg font-semibold"
	>
		<div class="p-1">
			{{ link.original_link }}
		</div>
		<div class="text-mcyan p-1">
			{{ link.full_short_link }}
		</div>
		<div>
			<button class="bg-mcyan text-white py-1 px-4 rounded-lg p-1">
				copy
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		link: Object,
	},
};
</script>

<style></style>
