/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bookmark-blue': 'hsl(231, 69%, 60%)',
				'bookmark-red': 'hsl(0, 94%, 66%)',
				'grayish-blue': 'hsl(229, 8%, 60%)',
				'dark-blue': 'hsl(229, 31%, 21%)'
			},
		},
		container:{
			center: true,
		}
	},
	plugins: [],
}

