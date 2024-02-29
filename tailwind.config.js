/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./proje/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "ArchivoBlack": "Archivo Black",
        "RobotoMedium": "Roboto Medium",
        "RobotoRegular": "Roboto Regular"
      },
      container: {
        center: "true",
        padding: {
          DEFAULT: '1.5rem',
          sm: "0.5rem",
          md: "0.5rem",
          lg: "0.5rem",
          xl: "1rem",
          "2xl": "0",
      }
      },
      colors: {
        "orange": {
          "150": "#F8E1DB",
          "350": "#E76F51",
          "450": "#e65e3c"
        },
        "pink": {
          "350": "#F8E1DB",
          "25": "#FAF4F2",
        },
        "gray": {
          "350": "#D2D2D2",
          "75": "#8D8D8D",
        },
      },
      borderColor: {
        "6xl": ""
      },
      borderRadius: {
        "9xl": "7rem"
      },
      lineHeight: {
        "20": "75px"
      },
      boxShadow: {
        "xxl": "rgba(231, 111, 81, 0.3) 0px 4px 16px, rgba(231, 111, 81, 0.2) 0px 8px 32px"
      },
      backgroundImage: {
        "shape-3": "url('/proje/img/svgs/shape3.svg')",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}

