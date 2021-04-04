module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'tosca':'#33BDBF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
