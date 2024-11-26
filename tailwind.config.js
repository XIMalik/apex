/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xl2: '1520px', // Custom screen size
      },
    },
  },
  plugins: [
    // require('daisyui'),
  ],
}