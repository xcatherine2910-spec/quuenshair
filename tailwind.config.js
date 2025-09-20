/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C0C0C0', // Silver
        secondary: '#111111', // Charcoal
        accent: '#FFFFFF', // White
        dark: '#000000', // Black
        'dark-lighter': '#1A1A1A', // Near-black
      },
    },
  },
  plugins: [],
}
