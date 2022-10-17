/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mrsSaintDel: ['SaintDel'],
        poppinsBold: ['poppins-bold'],
        poppinsRegular: ['poppins-regular'],
        poppinsSemiBold: ['poppins-semibold'],
        opensansLight: ['OpenSansLight'],
      },
    },
  },
  plugins: [],
};
