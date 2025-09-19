import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // schönes Blau
          light: "#3b82f6",
          dark: "#1e40af",
        },
        accent: {
          DEFAULT: "#ec4899", // modernes Pink
          light: "#f472b6",
          dark: "#be185d",
        },
      },
    },
  },
  plugins: [],
};
export default config;
