/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting")(require("postcss-nesting")),
    require("autoprefixer"),
    require("tailwindcss"),
  ],
};
