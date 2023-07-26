/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      "xs": '6.25em',
      "sm": '21.25em', //340px
      "md": '42.5em', // 680px
      "lg": '62em', // 992px
      "xl": '80em', // 1280px
      '2xl': '96em', // 1536px
    }
  },
  screens: {
    xs: "6.25em",
    sm: "21.25em", //340px
    md: "42.5em", // 680px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  },
  plugins: [],
};
