/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        litecoin: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
        },
      },
      boxShadow: {
        glow: '0 20px 80px rgba(14, 165, 233, 0.15)',
      },
      backgroundImage: {
        metal: 'linear-gradient(135deg, rgba(2,6,23,1) 0%, rgba(15,23,42,1) 40%, rgba(30,41,59,1) 100%)',
      },
    },
  },
  plugins: [],
};
