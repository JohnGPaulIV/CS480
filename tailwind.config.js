/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#EDF1F4",
        "paper-line": "#C9D6E0",
        ink: "#10243D",
        "ink-soft": "#3A5169",
        blue: "#2C5F86",
        amber: "#D98E04",
      },
      fontFamily: {
        head: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
      },
      maxWidth: {
        prose: "42rem",
      },
    },
  },
  plugins: [],
};
