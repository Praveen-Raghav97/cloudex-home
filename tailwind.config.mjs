/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class", // Ensure dark mode is enabled
	content: [
	  "./app/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	  "./pages/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		animation: {
			fadeIn: "fadeIn 1s ease-in-out",
		  },  keyframes: {
			fadeIn: {
			  "0%": { opacity: "0", transform: "translateY(-20px)" },
			  "100%": { opacity: "1", transform: "translateY(0)" },
			},
		  },
		colors: {
		  primary: {
			DEFAULT: "#7868E6", // Purple
			light: "#F6F5FD",  // Light Purple
			dark: "#120B42",   // Dark Purple
		  },
		  secondary: {
			DEFAULT: "#9333EA", // Accent Purple
			light: "#C084FC",  // Light Accent
			dark: "#7C2CF4",   // Dark Accent
		  },
		},
	  },
	},
	plugins: [],
  };
  