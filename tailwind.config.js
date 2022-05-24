const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      fontFamily: {
        'sans': ["Sora", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
