/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins : "Poppins",
        Mulish : 'Mulish',
        Inter : 'Inter'
      },
      colors: {
        'custom-purple' :'#B32DF9',
        'custom-aqua' : '#16C1DC'
      }
    },
  },
  plugins: [],
}