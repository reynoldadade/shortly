<template>
	<div id="p-4 flex w-full border-2 border-red-500">
		<div>
			<img src="@/assets/images/logo.svg" alt="shortly" />
		</div>
		<div class="flex">
			<div v-for="link in links" :key="link.title">
				<header>{{ link.title }}</header>
				<div>
					<div v-for="url in link.links" :key="url">
						<a href="#">{{ url }}</a>
					</div>
				</div>
			</div>
		</div>
		<div>
			logos
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
