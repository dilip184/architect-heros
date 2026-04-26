module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0066FF",
          50: "#F0F4FF",
          100: "#E6EBFF",
          200: "#CCE3FF",
          300: "#99C7FF",
          400: "#6AAAFF",
          500: "#3D8EFF",
          600: "#0066FF",
          700: "#0052CC",
          800: "#003D99",
          900: "#002966",
        },
        secondary: "#FF6B35",
        dark: "#1A1A1A",
        light: "#F5F7FA",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 16px rgba(0, 0, 0, 0.08)",
        hover: "0 8px 24px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
