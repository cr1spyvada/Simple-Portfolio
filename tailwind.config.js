/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '420px',
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
        w6: '#08080D',
        // w5:'#1C0118',//lighter shade of w5
        w5: '#140111',
        w4: '#5C80BC',
        w3: '#A6BDD9',
        w2: '#C57B57',
        w1: '#F0F9F6'
      },
      animation: {
        bounceX: 'bounceH 1s infinite',
        bounceY: 'bounceV 2s infinite'
      },
      keyframes: {
        bounceH: {
          '0%, 100%': {
            transform: 'translateX(50%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        bounceV: {
          '0%, 100%': {
            transform: 'translateY(-50%)',
            'animation-timing-function': 'cubic-bezier(1, 1, 0, 0)'
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      }
    }
  },
  plugins: []
};
