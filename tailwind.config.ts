import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.zinc
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.zinc.900')

            // ...
          }
        }
      })
    }
  }
}
