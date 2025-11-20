/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Màu đỏ từ thiết kế Figma (#FF0000)
        "promac-red": "#FF0000",
        // Màu đen text (#000000)
        "promac-black": "#000000",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lexend: ['"Lexend Deca"', "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      boxShadow: {
        // Shadow chính xác: 0px 4px 12px 0px #00000040 (40 hex = 25%)
        header: "0px 4px 12px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
