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
      },
      gridTemplateColumns: {
        products: 'repeat(4,minmax(0, 248px))'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
