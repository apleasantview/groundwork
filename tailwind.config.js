const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: false,
  theme: {
    fontFamily: {
      headings: ['Work Sans', 'sans-serif'],
      sans: ['Montserrat', 'sans-serif'],
    },
    container: {
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    colors: {
      'brand-green': '#2d8923',
      blue: colors.blue,
      yellow: colors.yellow,
    },
    extend: {
      borderWidth: {
        '12': '12px',
      },
      listStyleType: {
        'disclosure-closed': 'disclosure-closed',
      },
    },
  },
  variants: {},
  plugins: [],
};
