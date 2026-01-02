/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'retro-bg': '#f4ebe4',
        'retro-red': '#e63946',
        'retro-yellow': '#fcbf49',
        'retro-blue': '#457b9d',
        'retro-dark': '#1d3557',
        'retro-cream': '#f1faee',
        'retro-text': '#333333',
      },
      fontFamily: {
        'retro': ['"Carter One"', 'cursive'],
        'mono': ['"Space Mono"', 'monospace'], // Ensuring we have a nice mono for timer
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px #1d3557', // Hard shadow
        'retro-sm': '2px 2px 0px 0px #1d3557',
      }
    },
  },
  plugins: [],
}
