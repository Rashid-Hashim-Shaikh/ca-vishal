/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "primary": "#ECEEFF",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        palanquin: ["Palanquin", "sans-serif"],
      },
      backgroundImage: {
        "hero": "url('/assets/hero-bg.png')",
      },
    },
  },
  plugins: [],
}; 