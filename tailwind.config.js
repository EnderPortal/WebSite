/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ender: {
          primary: "#7b5cff",
          secondary: "#9d7aff",
          accent: "#b794ff",
          glow: "#e6d9ff",
          dark: "#1c1c1c",
          darker: "#0f0f0f",
        },
        minecraft: {
          obsidian: "#2a1f3d",
          endstone: "#d9d085",
          texture: "#1a1a1a",
        },
      },
      fontFamily: {
        pixel: ["Orbitron", "monospace"],
        modern: ["Inter", "sans-serif"],
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        portal: "portal 3s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        glow: {
          "0%": {
            boxShadow: "0 0 5px #7b5cff, 0 0 10px #7b5cff, 0 0 15px #7b5cff",
            transform: "scale(1)",
          },
          "100%": {
            boxShadow: "0 0 10px #7b5cff, 0 0 20px #7b5cff, 0 0 30px #7b5cff",
            transform: "scale(1.02)",
          },
        },
        portal: {
          "0%, 100%": {
            transform: "rotate(0deg) scale(1)",
            boxShadow: "0 0 20px #7b5cff",
          },
          "50%": {
            transform: "rotate(180deg) scale(1.1)",
            boxShadow: "0 0 40px #7b5cff, 0 0 60px #9d7aff",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "minecraft-texture":
          'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="16" fill="%23000000" opacity="0.1"/><rect width="8" height="8" fill="%23ffffff" opacity="0.02"/><rect x="8" y="8" width="8" height="8" fill="%23ffffff" opacity="0.02"/></svg>\')',
      },
    },
  },
  plugins: [],
};
