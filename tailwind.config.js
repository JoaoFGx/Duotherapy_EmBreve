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
            primarycolor: '#FFFFFF',
            secondarycolor: '#FF0000',
        },
    },
  },
  plugins: [],
}

