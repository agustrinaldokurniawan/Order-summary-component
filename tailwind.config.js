/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**.*{html,jsx,tsx}"],
  theme: {
    colors: {
      "pale-blue": "hsl(225, 100%, 94%)",
      "bright-blue": "hsl(245, 75%, 52%)",
      "very-pale-blue": "hsl(225, 100%, 98%)",
      "desaturated-blue": "hsl(224, 23%, 55%)",
      "dark-blue": "hsl(223, 47%, 23%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(359, 100%, 0%)",
    },
    extend: {},
  },
  plugins: [],
};
