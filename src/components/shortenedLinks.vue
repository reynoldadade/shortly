<template>
	<div
		class="w-full p-2 bg-white rounded-lg flex md:flex-row flex-col justify-between shadow-lg font-semibold my-2"
	>
		<div
			class="p-1 flex-1 border-b-2 border-gray-200 md:border-b-0 truncate"
		>
			{{ link.original_link }}
		</div>
		<div class="text-mcyan p-1 flex-1" :id="link.full_short_link">
			{{ link.full_short_link }}
		</div>
		<div class="">
			<button
				@click.prevent="copyText(link.full_short_link)"
				class="bg-mcyan text-white  md:py-2 md:px-4 rounded-lg p-2 w-full"
			>
				{{ link.full_short_link === selectedLink ? "copied" : "copy" }}
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		link: Object,
		selectedLink: String,
		copyText: Function,
	},
};
</script>

<style></style>
