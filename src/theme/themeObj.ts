export const themeObj = {
  colors: {
    oceanBlue: "#173343",
    oceanBlueV2: "#122936",

    white: "#FFFFFF",
    black: "#000000",
    grey: "grey",
  },
  animation: {
    linear: (timing = 2) => `.${timing}s all linear`,
  },
  media: {
    extraLarge: "(max-width: 1200px)",
    large: "(max-width: 1024px)",
    extraMedium: "(max-width: 960px)",
    moreMedium: "(max-width: 920px)",
    medium: "(max-width: 768px)",
    small: "(max-width: 600px)",
  },
  fonts: {
    fontFamily: "Roboto",
    fontBold: {
      fontSize: "30px",
      fontWeight: 700,
    },
    fontMedium: {
      fontSize: "22px",
      fontWeight: 500,
    },
    fontRegular: {
      fontSize18: "18px",
      fontSize16: "16px",
      fontSize14: "14px",
      fontWeight: 400,
    },
  },
};
