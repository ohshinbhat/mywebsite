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
        'sans1': ["Daisyogre"],
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
        'xs': '12px',
        'sm' : '16px',
        'base' : '28px',
        'md' : '32px',
        'lg' : '80px',
        'xl' : '100px'
      },
      backgroundImage:{
        'home' : "url('/Images/bgblk.jpg')"
      },
      screens: {
        'mob1': '480px',
        'xs': '768px',
        'sm': '862px',
        // => @media (min-width: 640px) { ... }
  
        'md': '1150px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1280px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1536px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1780px',
        // => @media (min-width: 1536px) { ... }
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

