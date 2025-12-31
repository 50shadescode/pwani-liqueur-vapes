/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#F6E05E',
          500: '#ECC94B',
          600: '#D69E2E', 
        },
        dark: {
          DEFAULT: '#050505',
          card: '#0F0F0F',
          border: '#1F1F1F'
        }
      },
    },
  },
  plugins: [],
}