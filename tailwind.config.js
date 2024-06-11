module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'background-theme-start': '#17393e',
        'background-theme-end': '#9bd2db',
        'experience-theme-start': "#3b93a2",
        'light-button': '#17393e'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}