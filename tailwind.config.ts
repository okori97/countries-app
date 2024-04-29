import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)", ...fontFamily.sans],
      },
      colors: {
        "Primary-100": "hsl(209, 23%, 22%)",
        "Primary-200": " hsl(207, 26%, 17%)",
        "Primary-300": "hsl(200, 15%, 8%)",
        "secondary-100": "hsl(0, 0%, 98%)",
        "secondary-200": "hsl(0, 0%, 52%)",
        "tertiary-100": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
