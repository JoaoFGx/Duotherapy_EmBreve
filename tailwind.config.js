/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
      ],
  theme: {
    extend: {
        colors: {
            primarycolor: '#7B1F9A',
            secondarycolor: '#9F248F',
        },
    },
  },
  plugins: [],
}

