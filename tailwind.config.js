module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
        darkBlue: "#041F31",
        lightGreen: "#00F5A0",
        lightBlack: "#222525",
        // green: "#27c93f",
        // lightRed: "#FF5F56",
        // yellow: "#FFBD2E",
      },
      fontFamily: {
        sans: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
