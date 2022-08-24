/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primaryColor: '#F7F7F8',
				secondaryColor: '#564FB1',
				hoverColor: '#202124',
			},
		},
	},
	plugins: [require('daisyui')],
};
