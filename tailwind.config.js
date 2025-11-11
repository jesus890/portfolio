const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  // darkMode: 'class', //activa modo obscuro
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        condensed: ['"Open Sans Condensed"', 'sans-serif'],
        semiCondensed: ['"Open Sans SemiCondensed"', 'sans-serif'],
      },
      colors: {
        
        azul: "#0A1F44",

        //fondo negro
        
        
        ceniza: '#3d4242',
      
        
        card: "#484d50",
        ceniza_light: "#66696b",
        inputs: "#1F2937",
        azul: "#1E3A8A",

        
        fondo_blanco: "#fefefe", 

        blanco: "#fffcfc",
        amarillo: "#c3a536",
        amarillo_suave: "#fceaaf",
        negro: "#3d4242",
        gris: "#f3f3f3",





        rojo: "#9c0001",
        negro_alt: "#5d6465",
        verde: "#248f7a",

        primary: "#cb9636"
        
      }
    },
  },
  plugins: [heroui()],


}

