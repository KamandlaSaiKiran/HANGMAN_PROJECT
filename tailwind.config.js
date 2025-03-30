/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans all JS/TSX files
    "./public/index.html", // If you use HTML templates
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        fredoka: ['Fredoka One', 'cursive'],
        marker: ['Permanent Marker', 'cursive'],
        bangers: ['Bangers', 'cursive'],
      },
    },
  },
  // theme: {
  //   extend: {},
  // },
  plugins: [],
};


