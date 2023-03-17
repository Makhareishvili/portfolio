import { createTheme } from "@mui/material/styles";
export const DefaultThemes = createTheme({
  colors: {
    background: "#18191a",
    nero: "#242526",
    charcoal: "#3a3b3c",
    dimGray: "#e4e6eb",
    gainsBoro: "#b0b3b8",
    blueBolt: "#00BCF3",
    coolGrey: "#8892b0",
    backgroundInRGB: {
      r: "24",
      g: "25",
      b: "26",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 481,
      laptop: 769,
      desktop: 1025,
      tv: 1201,
    },
  },
});
