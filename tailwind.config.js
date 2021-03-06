module.exports = {
  purge: [],

  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      desktop: "1280px",
      "tablet-max": { max: "1127px" },
      "lg-max": { max: "1023px" },
      tablet: "768px",
      "mobile-max": { max: "767px" },
      mobile: "320px",
      lg: "1024px",
    },
    fontSize: {
      12: "12px",
      16: "16px",
      20: "20px",
      22: "22px",
      24: "24px",
      30: "30px",
      40: "40px",
      50: "50px",
    },
    letterSpacing: {
      small: "0.01em",
    },
    extend: {
      colors: {
        red: "#FE5F5F",
        blue: "#3865A7",
        black2: "#2B2B2B",
        black3: "#2F2F2F",
        white: "#FFFFFF",
      },
      borderRadius: {
        50: "50px",
      },
      maxWidth: {
        263: "263px",
      },
      spacing: {
        100: "100px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
