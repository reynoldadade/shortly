module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				mcyan: "hsl(180, 66%, 49%)",
				mviolet: "hsl(257, 27%, 26%)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
