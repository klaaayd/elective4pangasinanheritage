import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Pangasinan Heritage Colors
        pangasinan: {
          blue: {
            DEFAULT: '#0284c7', // Ocean blue for Hundred Islands
            dark: '#0369a1',
            light: '#38bdf8',
          },
          green: {
            DEFAULT: '#16a34a', // Island green
            dark: '#15803d',
            light: '#4ade80',
          },
          sand: {
            DEFAULT: '#fde047', // Bolinao sand / Sunflower
            dark: '#eab308',
            light: '#fef08a',
          },
          salt: {
            DEFAULT: '#f8fafc', // Dasol salt / off white
            dark: '#e2e8f0',
          }
        },
        primary: {
          DEFAULT: '#0284c7',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#16a34a',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#eab308',
          foreground: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      }
    },
  },
  plugins: [],
};
export default config;
