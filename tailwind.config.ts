import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
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
      },
      fontSize: {
        "6xl": ["3.75rem", "3"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shine: "shine var(--duration) infinite linear",
        rippling: "rippling var(--duration) ease-out",
        meteor: "meteor var(--meteor-duration, 4s) linear infinite",
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        shine: {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        meteor: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '100%': { transform: 'translateY(120vh) translateX(60vw)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
