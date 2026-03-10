/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      maxWidth: {
        'website': '1600px',
      },
    },
  },
  plugins: [],
}