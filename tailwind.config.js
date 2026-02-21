/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC107',
        secondary: '#1a1a1a',
        text: '#ffffff',
        lightText: '#b0b0b0',
        background: '#0d0d0d',
        lightGray: '#1a1a1a',
        borderColor: '#333333',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
