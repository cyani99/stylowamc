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
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        infinity: 'moveInfinity 2s linear infinite',
        blink: 'blink 3s steps(2, start) infinite 6s', // Adjust timing here
      },
    },
  },
  plugins: [],
}

