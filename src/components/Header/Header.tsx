import { Box, Button, Theme } from "@mui/material";
import { css, keyframes, styled } from "@mui/system";
import { DefaultThemes } from "../../Themes/DefaultThemes";
const contentAnimation = keyframes({
  from: {
    color: DefaultThemes.colors.blueBolt,
    transform: "translateY(-30%)",
  },
  to: {
    transform: "translateY(0)",
  },
});
const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100vh",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  margin: "0px auto",
  maxWidth: "1030px",
  "& p": {
    // animation
    animationDuration: "100ms",
    animationTimingFunction: "ease-in",
    animationFillMode: "forwards",
    transform: "scale(0)",
    "&:first-of-type": {
      fontSize: "16px",
      margin: "0 0 12px 4px",
      color: DefaultThemes.colors.blueBolt,
      letterSpacing: "0.1em",
      // animation
      animationDelay: "800ms",
      animationName: contentAnimation,
    },
    "&:nth-of-type(2)": {
      fontSize: "77px",
      color: "#ccd6f6",
      lineHeight: "1.5",
      fontWeight: "bolder",
      // animation
      animationDelay: "900ms",
      animationName: contentAnimation,
    },
    "&:nth-of-type(3)": {
      fontSize: "77px",
      fontWeight: "bolder",
      color: "#8892b0",
      // animation
      animationDelay: "1000ms",
      animationName: contentAnimation,
    },
    "&:nth-of-type(4)": {
      fontSize: "20px",
      maxWidth: "700px",
      lineHeight: "1.3",
      marginTop: "20px",
      color: "#8892b0",
      // color: DefaultThemes.colors.gainsBoro,
      // animation
      animationDelay: "1100ms",
      animationName: contentAnimation,
    },
  },
  [theme.breakpoints.up("mobile")]: {
    "& > p:nth-of-type(4)": {
      fontSize: "17px",
      marginTop: "12px",
      maxWidth: "300px",
    },
    "& > p:nth-of-type(1)": {
      fontSize: "16px",
    },
    "& > p:nth-of-type(2)": {
      fontSize: "25px",
    },
    "& > p:nth-of-type(3)": {
      fontSize: "25px",
    },
  },
  [theme.breakpoints.up("tablet")]: {
    "& > p:nth-of-type(4)": {
      fontSize: "14px",
      maxWidth: "unset",
    },
    "& > p:nth-of-type(1)": {
      fontSize: "12px",
    },
    "& > p:nth-of-type(2)": {
      fontSize: "27px",
    },
    "& > p:nth-of-type(3)": {
      fontSize: "27px",
    },
  },
  [theme.breakpoints.up("laptop")]: {
    "& > p:nth-of-type(4)": {
      fontSize: "16px",
    },
    "& > p:nth-of-type(1)": {
      fontSize: "14px",
    },
    "& > p:nth-of-type(2)": {
      fontSize: "37px",
    },
    "& > p:nth-of-type(3)": {
      fontSize: "37px",
    },
  },
  [theme.breakpoints.up("desktop")]: {
    "& > p:nth-of-type(1)": {
      fontSize: "16px",
    },
    "& > p:nth-of-type(2)": {
      fontSize: "67px",
    },
    "& > p:nth-of-type(3)": {
      fontSize: "67px",
    },
    "& > p:nth-of-type(4)": {
      fontSize: "20px",
    },
  },
  [theme.breakpoints.up("tv")]: {
    "& > p:nth-of-type(2)": {
      fontSize: "77px",
    },
    "& > p:nth-of-type(3)": {
      fontSize: "77px",
    },
  },
}));
const BookButton = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("laptop")]: {
    "&": {
      "& a": {
        fontSize: "12px",
      },
    },
  },
  [theme.breakpoints.down("tablet")]: {
    "&": {
      "& a": {
        fontSize: "13px",
        marginTop: "24px",
      },
    },
  },
  // animation
  animationDuration: "100ms",
  animationTimingFunction: "ease-in",
  animationFillMode: "forwards",
  transform: "scale(0)",
  animationDelay: "1200ms",
  animationName: contentAnimation,
}));
const Header = () => {
  return (
    <>
      <ContentContainer id="header">
        <p>Hola, my name is</p>
        <p>Levani Makhareishvili</p>
        <p>Inter Front-end Developer.</p>
        <p>
          As a detail-oriented Front-end Developer, I am constantly striving to
          improve my skills and stay up-to-date with new technologies. With a
          passion for crafting seamless web experiences, I enjoy using my
          creativity to solve complex problems.
        </p>
        <BookButton>
          <Button
            href="mailto:levanimakharei7li@gmail.com"
            sx={{
              marginTop: "50px",
              backgroundColor: "#2c87e9",
              borderRadius: "20px",
            }}
            variant="contained"
          >
            Book a meeting
          </Button>
        </BookButton>
      </ContentContainer>
    </>
  );
};
export default Header;
