/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px',  
    },
    extend: {
      colors:{
        primary: '#047857',
        secondary: '#64748b',
        dark: '#0f172a',
        hero:'#E5F9DB',
        about:'#A0D8B3',
        project:'#A2A378',
        skill:'#83764F',
      },
      screens:{
        '2xl':'1320p',
      },
    },
  },
  plugins: [],
}

