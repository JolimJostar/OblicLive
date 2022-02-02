

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        CalcCatalog: 'calc(100% + 30px)', 
      },
      dropShadow: {
        filterShadow: '0px 5px 10px #0A0A0A'
      },
      colors: {
        // Build your palette here
        white: "#FFF",
        gray: "#555",
        strongGray: "#292A2D",
        mainGray: "#161A16",
      },
      fontSize: {
        small: "14px",
        mid: "16px",
        big: "18px",
      },
      fontFamily: {
        main: ["Manrope"],
      },
      border: {
        rock: '1px solid #292A2D',
      },
      transitionProperty: {
        'testAnim': 'all ease-in-out 2s',
        'mainPageArrowDown': 'all ease-in-out 4s',
      },
      gridTemplateColumns: {
       'simple2': 'repeat(2, 1fr)',
      },
      cursor: {
        'none' : 'none'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
