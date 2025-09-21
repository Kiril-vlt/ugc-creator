import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6", // Lila
        accent: "#ec4899", // Pink
        dark: "#0f172a",   // Dunkles Blau für Footer
      },
    },
  },
  plugins: [],
};

export default config;
