/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["cupcake"],
    darkTheme: "cupcake",
  },
  plugins: [require("daisyui")],
};
