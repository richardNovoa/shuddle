/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/capstone-ds-rn/dist/components/**/*.js'
	],
	colors: {},
	theme: {
		extend: {
			colors: {
				midnight: {
					100: '#E9F3FE',
					200: '#D3E7FD',
					300: '#A7D0FB',
					400: '#7BB8FA',
					500: '#4FA1F8',
					600: '#2389F6',
					700: '#1C6EC5',
					800: '#155294',
					900: '#0E3762',
					1000: '#011542'
				},
				apricot: {
					100: '#FEF3F1',
					200: '#FCE8E3',
					300: '#FAD1C7',
					400: '#F7B9AC',
					500: '#F5A290',
					600: '#F28B74',
					700: '#C26F5D',
					800: '#915346',
					900: '#61382E',
					1000: '#301C17',
					1100: '#5C0007',
					1200: '#320A00'
				},
				amethyst: {
					100: '#F5EFF8',
					200: '#EADEF0',
					300: '#D6BEE2',
					400: '#C29ED4',
					500: '#AE7FC5',
					600: '#9A5FB7',
					700: '#8242A2',
					800: '#62327A',
					900: '#432254',
					1000: '#271430'
				},
				marina: {
					100: '#E7FFFD',
					200: '#D0FFFA',
					300: '#AEFFF7',
					400: '#71FFF1',
					500: '#42FFEC',
					600: '#13FFE7',
					700: '#0FCCB9',
					800: '#0B998B',
					900: '#08665C',
					1000: '#04332E',
					1100: '#012D28'
				}
			}
		}
	},
	plugins: []
};
