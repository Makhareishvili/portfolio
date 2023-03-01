import { Box, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "../../Themes/Theme";
const useStyles = makeStyles({
  loadingText: {
    position: "relative",
    fontSize: "48px",
    color: `${Theme.colors.background}`,
    WebkitTextStroke: `0.1vw ${Theme.colors.nero}`,
    letterSpacing: ".1em",
    "&:before": {
      content: "attr(data-text)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "0%",
      height: "100%",
      color: `${Theme.colors.blueBolt}`,
      WebkitTextStroke: `0vw ${Theme.colors.nero}`,
      // borderRight: "2px solid #01fe87",
      overflow: "hidden",
      animation: "$animate 3s",
      animationFillMode: "forwards",
    },
  },
  "@keyframes animate": {
    from: {
      width: "0",
    },
    to: {
      width: "100%",
    },
  },
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  fragment: {
    color: `${Theme.colors.nero}`,
    fontSize: "50px",
    WebkitTextStroke: `1px ${Theme.colors.nero}`,
    margin: "5px",
  },
});
const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("mobile")]: {
    h2: {
      fontSize: "18px",
    },
  },
  [theme.breakpoints.up("tablet")]: {
    h2: {
      fontSize: "28px",
    },
  },
  [theme.breakpoints.up("laptop")]: {
    h2: {
      fontSize: "38px",
    },
  },
  [theme.breakpoints.up("desktop")]: {
    h2: {
      fontSize: "48px",
    },
  },
  [theme.breakpoints.up("tv")]: {
    h2: {
      fontSize: "58px",
    },
  },
}));
const WelcomeScreen = () => {
  const text = "Portfolio";
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Responsive sx={{ display: "flex", alignItems: "center" }}>
        <span className={classes.fragment}>{"<"}</span>
        <h2 className={classes.loadingText} data-text={text}>
          {text}
        </h2>
        <span className={classes.fragment}>{"/>"}</span>
      </Responsive>
    </Box>
  );
};
export default WelcomeScreen;
