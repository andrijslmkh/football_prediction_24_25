/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // added new 4 column grid as new4
        small: "50px 50px auto 30px 30px",
      },
      gridTemplateRows: {
        "50px": "50px",
      },
      gridAutoRows: {
        "50px": "minmax(50px, auto)",
      },
    },
  },
  plugins: [],
};
