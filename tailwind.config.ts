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
        "theme-light": "#222222",
        "theme-dark": "#FEFEFE",
        "admin-bg": "#EEEEEE",
        "sidebar-bg": "#F2F3F6",
        "light-bg": "#FEFEFE",
        "dark-bg": "#1E1E20",
        "logo-light": "#222222",
        "project-dark": "#323234",
        "project-tag-dark": "#8E9197",
        "appearance-light-theme": "#F3F3F3",
        "appearance-dark-theme": "#1F1F21",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "appearance-light-theme": "1px 1px 3px rgba(0, 0, 0, 0.05) inset",
        "appearance-dark-theme": "5px 5px 15px rgba(0, 0, 0, 0.5) inset",
        "appearance-light-theme-circle":
          "-1px 1px 2px rgba(0,0,0,0.2), 1px -1px 3px rgba(0,0,0,0.2) inset",
        "appearance-dark-theme-circle":
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
