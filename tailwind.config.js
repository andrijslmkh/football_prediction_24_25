/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // added new 4 column grid as new4
        24: "repeat(24, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
