# shuddle
## Getting Started
Once you have your React project ready, let's install the Astro Design System. To do this, simply run the following command in your project directory:

```
npm install capstone-ds-rn
```

### Installing Tailwind
Next, let's install Tailwind CSS for React. Tailwind is a popular utility-first CSS framework that helps you quickly build custom designs without writing any CSS code. To install Tailwind, run the following commands in your project directory:

```
npm install -D tailwindcss
npx tailwindcss init
```

After installing Tailwind, you need to configure it in your project. Edit the file named `tailwind.config.js` in your project directory and paste the following code:
```
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
```

Finally, replace the following code in your `src/index.css` file to import and apply Tailwind styles to your project:
```
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=IBM+Plex+Serif:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500;1,600&display=swap');

.body-1 {
	font-family: 'IBM Plex Mono';
	font-style: normal;
	font-weight: 300;
	font-size: 1rem;
	line-height: 1rem;
}
.subtitle-1 {
	font-family: 'IBM Plex Serif';
	font-style: normal;
	font-weight: 400;
	font-size: 0.938rem;
	line-height: 1rem;
}
.heading-3 {
	font-family: 'IBM Plex Serif';
font-style: normal;
font-weight: 400;
font-size: 1.5;
line-height: 2rem;
}
.heading-2 {
	font-family: 'IBM Plex Serif';
font-style: normal;
font-weight: 400;
font-size: 2.5rem;
line-height: 3rem;
}
.heading-1 {
	font-family: 'IBM Plex Serif';
font-style: normal;
font-weight: 500;
font-size: 4rem;
line-height: 4rem;
}
.label {
	font-family: 'IBM Plex Mono';
font-style: normal;
font-weight: 600;
font-size: 1rem;
line-height: 1rem;
}
```


Last but not least, to add FontAwesome functionality add this code to `public/index.html`
```
<script src="https://kit.fontawesome.com/69a17597d6.js" crossorigin="anonymous"></script>
```
And that's it! You're now ready to start using the Dribbble Design System in your React project. Just import the components you need from capstone-ds-rn and start writing your code. Happy coding!
