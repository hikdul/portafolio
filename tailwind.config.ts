import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow:{
      "card-shadow":"0 0 0 0 #1CCCF3",
      "card-shadow-light":"0 0 0 0 #1CCCF3",
      "card-next-shadow":"0 0 0 4000px #1CCCF34D",
      "card-next-shadow-light":"0 0 0 4000px #1CCCF34D",
      "glass": "20px 20px 50px rgba(0, 0, 0, .5);",
    },
    colors:{
      verde: "#0f0",
      negro: "#333",
    },
    background:{
        loader: "linear-gradient(45deg, transparent, transparent 40%, #6ddb1f)",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        slider: "linear-gradient(to top, #2c445c 10%, transparent)",
        thumbnails: "linear-gradient(to top, #2c445c 2%, transparent)",
      },
      keyframes:{
        showContent:{
          to:{
            transform: "translateY(0)",
            filter: "blur(0)",
            opacity: "1",
          },
        hiddenContent:{
            transform: "translateY(100%)",
            filter: "blur(25)",
            opacity: "0",
        }
        },
        
      },
      animation:{
        "show-content":"showContent 1.6s .5s ease-in-out forwards",
        "hidden-content":"hiddenContent 1.6s .5s ease-out forwards" 
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwind-animation-delay')],
} satisfies Config;
