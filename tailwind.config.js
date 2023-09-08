/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Refer to default Configuration
  // https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js

  theme: {
    fontFamily: {
      // If you would like to specify a specific font with font- as in font-pizza
      // pizza: "Roboto Mono, monospace",
      // To Specify a Global font
      sans: "Roboto Mono, monospace",
    },
    extend: {
      // Extending colors as an example and use as bg-pizza
      //   colors: { pizza: "#123456" },
      // Another example
      // Use as text-huge
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
