import { ClassNames } from "@emotion/react";
import { Box, Button } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "../../Themes/Theme";
const useStyle = makeStyles({
  mainContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `2px solid ${Theme.colors.blueBolt}`,
    borderRadius: "50%",
    height: "40px",
    width: "40px",
    "& p": {
      position: "relative",
      color: `${Theme.colors.blueBolt}`,
    },
    // animation
    animationDuration: "100ms",
    animationTimingFunction: "ease-in",
    animationFillMode: "forwards",
    transform: "scale(0)",
    animationDelay: "400ms",
    animationName: "$listLoad",
  },
  listContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& ul": {
      listStyleType: "none",
      display: "flex",
    },
    "& li": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: `${Theme.colors.gainsBoro}`,
      margin: "0 10px",
      cursor: "pointer",
      // animation
      animationDuration: "100ms",
      animationTimingFunction: "ease-in",
      animationFillMode: "forwards",
      transform: "scale(0)",

      // childrens
      "&:first-child": {
        animationDelay: "400ms",
        animationName: "$listLoad",
      },
      "&:nth-child(2)": {
        animationDelay: "500ms",
        animationName: "$listLoad",
      },
      "&:nth-child(3)": {
        animationDelay: "600ms",
        animationName: "$listLoad",
      },
      "&:last-child": {
        animationDelay: "700ms",
        animationName: "$listLoad",
      },
    },
    "& a": {
      "&:hover": {
        color: `${Theme.colors.blueBolt}`,
        transition: ".5s ease",
      },
    },
  },
  bookButton: {
    // animation
    animationDuration: "100ms",
    animationTimingFunction: "ease-in",
    animationFillMode: "forwards",
    transform: "scale(0)",
    animationDelay: "800ms",
    animationName: "$listLoad",
  },
  "@keyframes listLoad": {
    "0%": {
      transform: "translateY(-30%)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
});

const Navbar = () => {
  const classes = useStyle();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.logoContainer}>
        <p>M</p>
      </Box>
      <Box className={classes.listContainer}>
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Education</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <Button variant="contained" className={classes.bookButton}>
          Book a meeting
        </Button>
      </Box>
    </Box>
  );
};
export default Navbar;
