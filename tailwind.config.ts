import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
      },
      colors: {
        "text-light": "#222222",
        "admin-bg": "#EEEEEE",
        "sidebar-bg": "#F2F3F6",
        "light-bg": "#FEFEFE",
        "dark-bg": "#1E1E20",
        "logo-light": "#222222",
        "project-dark": "#323234",
        "project-tag-dark": "#8E9197",
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
        appearancelightlabel: "1px 1px 3px rgba(0, 0, 0, 0.05) inset",
        appearancedarklabel: "5px 5px 15px rgba(0, 0, 0, 0.5) inset",
        appearancelightcircle:
          "-1px 1px 2px rgba(0,0,0,0.2), 1px -1px 3px rgba(0,0,0,0.2) inset",
        appearancedarkcircle:
          "5px 5px 10px rgba(0,0,0,0.5), -5px -5px 15px rgba(0,0,0,0.5) inset",
        "sidebar-shadow": "10px 10px 10px 10pxs rgba(0, 0, 0, 1)",
        "mobile-nav-button":
          "inset -8px 0 8px rgba(0,0,0,0.15), inset 0 -8px 8px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
