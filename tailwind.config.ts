module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Ensure Tailwind scans all relevant files
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'], // Add Rubik font to Tailwind
      },
      colors: {
        primary: {
          default: '#282282', // Primary color
          100: 'rgba(40, 34, 130, 0.1)',
          200: 'rgba(40, 34, 130, 0.2)',
          300: 'rgba(40, 34, 130, 0.3)',
          400: 'rgba(40, 34, 130, 0.4)',
          500: 'rgba(40, 34, 130, 0.5)',
          600: 'rgba(40, 34, 130, 0.6)',
          700: 'rgba(40, 34, 130, 0.7)',
          800: 'rgba(40, 34, 130, 0.8)',
          900: 'rgba(40, 34, 130, 0.9)',
        },
      },
    },
  },
  plugins: [],
};
