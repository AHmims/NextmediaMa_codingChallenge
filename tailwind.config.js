const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['dist/index.html']
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        warmGray: colors.warmGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
