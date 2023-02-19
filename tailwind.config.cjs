/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      colors: {
        'background': '#121214',
        'white-tweet': '#e1e1e6',
        'gray-primary': '#828282',
        'gray-secondary': '#2F2F2F',
        'gray-tertiary': '#202020',
        'blue-primary': '#1DA1F2',
      }
    },
  },
  plugins: [],
}