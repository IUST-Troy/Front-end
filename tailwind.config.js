/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        pallate: {
          celeste: '#BAE8DBff',
          persian_green: '#1BA291ff',
          blue_munsell: '#008BA8ff',
          french_mauve: '#BA66BBff',
          finn: '#654479ff',
          wisteria: '#B193CFff',
          pink_lavender: '#F7C1E3ff',
          celeste_lowOp: 'rgba(186, 232, 219, 0.438)',
          celeste_light: 'rgb(250, 255, 254)',
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

