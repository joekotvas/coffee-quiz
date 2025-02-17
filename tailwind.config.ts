import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        'burnt-orange': '#b36737',
        'golden': '#D88549;',
        'rich-brown': '#4A170E',
        'light-brown': '#6A270D'
      },
    },
  },
  plugins: [
    require('tailwindcss-motion')
  ],
} satisfies Config;
