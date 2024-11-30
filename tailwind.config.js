/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveInfinity: {
          '0%, 100%': { strokeDashoffset: '0' },
          '50%': { strokeDashoffset: '314' }, // Total path length of the infinity shape
        },
      },
      animation: {
        infinity: 'moveInfinity 2s linear infinite',
      },
    },
  },
  plugins: [],
}

