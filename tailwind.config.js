module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        "width": "width",
        'spacing': 'margin, padding',
       },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(110% 90%, var(--tw-gradient-stops))',
      },
      colors: {
        "header-dark": "#060616",
        "header-light": "#1C1761",
        "purple-light": "#8175FF",
        "purple-dark": "#050413",
        "yellow-title": "#FFC107",
        "accent-color": "#F86758",
      },
      fontFamily:{
        laila: ["Laila"]
      },
      spacing:{
        90 : "360px",
        66 : "264px",
        108 : "432px"
      },
      inset:{
        90 : "360px",
        108 : "432px"
      },
      rotate: {
        "-30" : "-30deg",
        "30" : "30deg"
      }
    },
   
  },
  variants: {
    height: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {},
  },
  plugins: [],
}
