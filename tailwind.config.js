/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },

  },
  plugins: [],
}
