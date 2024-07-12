/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'benefitsbg': "url('src/img/recursosHomePage/backgroundBenefitModTrama.png')",
      }),
      colors: {
        'background-1': '',
        'background-2': '#202748',
      },
      fontSize: {
        'title': '64px', 
        'h1': '56px',  
        'h2': '40px',    
        'h3': '28px', 
        'h4': '21px',  
        'h5': '14px',
        'h6': '12px',  
        'titlem': '28px', 
        'h1m': '20px',  
        'h2m': '18px',    
        'h3m': '16px', 
        'h4m': '14px',   
      },
      lineHeight: {
        'titlelh': '72px', 
        'h1lh': '72px',  
        'h2lh': '56px',    
        'h3lh': '39.2px', 
        'h4lh': '36px',  
        'h5lh': 'px',
        'h6lh': 'px',  
      },
      spacing: {
        '50px': '-50px',
        "5px": "5px",
      },
      screens: {
        'max-660': {'max': '660px'},
      },
      boxShadow: {
        'shadow1': '7px 7px 5px rgba(0, 0, 0, 0.2)',
        'shadow2': '5px 5px 6px rgba(0, 0, 0, 0.12)', // Aquí definimos la sombra personalizada
      },
      transform: {
        'scale-x-flip': 'scaleX(-1)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scale-x-flip': {
          transform: 'scaleX(-1)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
