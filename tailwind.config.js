const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        fontFamily: {
          sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
        },
        colors: {
          "moody-blue-50": "#C4C7F3",
          "moody-blue-100": "#A3A8EB",
          "moody-blue-200": "#8389E3",
          "moody-blue-300": "#646BD9",
          "moody-blue-400": "#464ECF",
          "moody-blue-500": "#333BB8",
          "moody-blue-600": "#2C3396",
          "moody-blue-700": "#242975",
          "moody-blue-800": "#1C1F55",
          "moody-blue-900": "#131536",
          "lo" : "#ed64a6"
        }, 
        height: {
          "95-px": "95px",
          "70-px": "70px",
          "350-px": "350px",
          "500-px": "500px",
          "600-px": "600px",
        },   
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }