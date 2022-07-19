module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        white: "#fff",
        black: "#000",
        purple: "#5222D0",
        // lightGreen: "#0ee6b7",
        // green: "#27c93f",
        // lightRed: "#FF5F56",
        // yellow: "#FFBD2E",
      },
      fontFamily: {
        sans: ["Montserrat"],
      },
    },
  },
  plugins: [require("daisyui")],
};
