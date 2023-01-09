/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bg: "#181818",

      "btn-text": "#FFFFFF",
      "btn-bg": "#FFFFFF0D",
      "btn-bg-hover": "#FFFFFF0A",
      "btn-bg-focus": "#FFFFFF04",

      "notes-bg": "#1C1C1C",
      "note-item-bg": "#FFFFFF08",
      "note-item-bg-hover": "#FFFFFF05",
      "note-item-bg-focus": "#FFFFFF02",
      "note-selected-item-bg": "#FFFFFF1A",
      // "note-selected-item-bg-hover": "#FFFFFF05",
      // "note-selected-item-bg-focus": "#FFFFFF02",

      "secondary-text": "#FFFFFF99",

      "selected-recent-bg": "#312EB5",

      "menu-item-text": "#FFFFFF99",

      "option-bg": "#1C1C1C",
      "option-bg-hover": "#171717",
    },
    fontFamily: {
      logo: ["Kaushan Script"],
    },
    extend: {},
  },
  plugins: [],
};
