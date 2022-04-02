module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [
    require('daisyui'),
    require("autoprefixer")
    // require('tailwindcss-rtl'),
  ],
  daisyui: {
    rtl: true,
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  theme: {
    extend: {

      zIndex: {
        "-1": "-1",
      },

      transformOrigin: {
        "0": "0%",
      },

      marginRight: {
        'screen': '100vw'
      },

      maxWidth: {

        'max-100': '1140px',
        'card': '344px'
      },
      minWidth: {
        '96': '24rem',
      },
      height: {
        'max': 'max-content',
        'full': '100%',
        'header': '590px'
      },
    }
  }
}