/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-bg1": "url('/heroBanner1.webp')",
        "hero-bg2": "url('/heroBanner2.webp')",
        "hero-bg3": "url('/heroBanner3.webp')",
        "block-bg": "url('/block-bg.jpg')",
        "block-bgRotate": "url('/block-bgRotate.jpg')",
      },
      fontFamily: {
        customFont1: ["Mulish", "sans-serif"],
        customFont2: ["Philosopher", "sans-serif"],
      },
      colors: {
        block2s1: "rgba(45, 126, 248, .1)",
        block2s2: "rgba(54, 48, 98, .1)",
        block3: "#906177",
        custom1: "#E58C62",
        custom2: "#EEECE0",
        custom3: "#F6D8CD",
        custom4: "#C36F65",
        btnNormal: "#8EA9BC",
        btnHover: "#51677E",
      },
    },
  },
  plugins: [],
};
