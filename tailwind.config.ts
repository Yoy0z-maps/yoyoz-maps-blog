import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
        productSansBold: ["var(--font-product-sans-bold)"],
        productSansLight: ["var(--font-product-sans-light)"],
        productSansMedium: ["var(--font-product-sans-medium)"],
        productSansRegular: ["var(--font-product-sans-regular)"],
        productSansThin: ["var(--font-product-sans-thin)"],
      },
      colors: {
        darkbg: "#2C2C2F",
        lightbg: "#F3F3F3",
        appearancelightlabel: "#F3F3F3",
        appearancedarklabel: "#1F1F21",
        container: "#20232a",
        eyebackground: "#edf8ff",
        eyered: "#fb6971",
        eyeblue: "#6192a1",
        skin: "#fdece2",
        eyeblack: "#111",
        mouth: "#ff4e57",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        appearancelightlabel: "5px 5px 15px rgba(0, 0, 0, 0.05) inset",
        appearancedarklabel: "5px 5px 15px rgba(0, 0, 0, 0.5) inset",
        appearancelightcircle:
          "-5px 5px 10px rgba(0,0,0,0.2), 5px -5px 15px rgba(0,0,0,0.2) inset",
        appearancedarkcircle:
          "5px 5px 10px rgba(0,0,0,0.5), -5px -5px 15px rgba(0,0,0,0.5) inset",
        "eyes-shadow": "25px 25px 0 rgba(0,0,0,0.05)",
        "eye-shadow": "0 0 0 3px #3d5d89",
        eyebrush: "0 -3px 0 #111",
        "mouth-shadow": "inset 0 10px 0 rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
