/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#060B22',
      },
      fontSize: {
        custom16px: '16px',
      },
      screens: {
        'md': '950px', 
      },
    },
  },
  plugins: [

  ],
}
