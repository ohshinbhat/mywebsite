/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
        // Define more stroke widths if needed
      },
      textStrokeColor: theme => theme('colors'),
      fontFamily: {
        'sans1': ['Daisyogre'],
        'sans2' : ["Space Mono"] 
      },
      colors:{
        'creme' : '#E0D5C0',
        'myblue' : '#571FF5',
        'myyellow' : '#BEFF05',
        'mypink' : '#F72798',
        'myorange' : '#F15412'
      },
      fontSize: {
        'sm' : '20px',
        'base' : '28px',
        'md' : '32px',
        'lg' : '54px',
        'xl' : '104px'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          WebkitTextStrokeWidth: 'var(--text-stroke-width, 2px)',
          WebkitTextStrokeColor: 'var(--text-stroke-color, #BEFF05)',
          textStrokeWidth: 'var(--text-stroke-width, 2px)',
          textStrokeColor: 'var(--text-stroke-color, #BEFF05)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

