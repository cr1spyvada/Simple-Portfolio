/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      inset: {
        17: '68px',
        26: '104px'
      },
      colors: {
        martinique: '#303655',
        loblolly: '#bfcbce',
        nepal: '#84a7ba',
        wildblueyonder: '#6f90af'
      },
      animation: {
        bounceX: 'bounce 1s infinite'
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateX(50%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      }
    }
  },
  plugins: []
};
