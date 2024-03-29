const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
