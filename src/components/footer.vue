<template>
	<div class="w-full p-8 flex justify-between bg-mdarkblue h-40">
		<div class="text-white text-5xl ">
			Shortly
		</div>
		<div class="flex text-sm text-white">
			<div v-for="link in links" :key="link.title" class="p-2">
				<header class=" font-bold">{{ link.title }}</header>
				<div>
					<div v-for="url in link.links" :key="url">
						<a href="#">{{ url }}</a>
					</div>
				</div>
			</div>
		</div>
		<div class="grid gap-4 grid-cols-4">
			<img src="@/assets/images/icon-facebook.svg" alt="" />
			<img src="@/assets/images/icon-instagram.svg" alt="" />
			<img src="@/assets/images/icon-pinterest.svg" alt="" />
			<img src="@/assets/images/icon-twitter.svg" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	name: "FooterComponent",
	data() {
		return {
			links: [
				{
					title: "Features",
					links: ["Link shortening", "Branded links", "Analysis"],
				},
				{
					title: "Resources",
					links: ["Blog", "Developers", "Support"],
				},
				{
					title: "Company",
					links: ["About", "Our Team", "Careers", "Contact"],
				},
			],
		};
	},
};
</script>

<style></style>
