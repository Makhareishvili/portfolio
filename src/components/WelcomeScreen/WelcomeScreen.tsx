import { Box } from "@mui/material";
import { keyframes, styled } from "@mui/system";
import { DefaultThemes } from "../../Themes/DefaultThemes";
const animate = keyframes({
  from: {
    width: 0,
  },
  to: {
    width: "100%",
  },
});
const LoadingText = styled("h2")({
  position: "relative",
  fontSize: "48px",
  color: `${DefaultThemes.colors.background}`,
  WebkitTextStroke: `0.1vw ${DefaultThemes.colors.nero}`,
  letterSpacing: ".1em",
  "&:before": {
    content: "attr(data-text)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "0%",
    height: "100%",
    color: `${DefaultThemes.colors.blueBolt}`,
    WebkitTextStroke: `0vw ${DefaultThemes.colors.nero}`,
    // borderRight: "2px solid #01fe87",
    overflow: "hidden",
    animation: `${animate} 3s`,
    animationFillMode: "forwards",
  },
});
const MainContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: `${DefaultThemes.colors.background}`,
});
const Fragment = styled("span")({
  color: `${DefaultThemes.colors.nero}`,
  fontSize: "50px",
  WebkitTextStroke: `1px ${DefaultThemes.colors.nero}`,
  margin: "5px",
});
const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("tablet")]: {
    h2: {
      fontSize: "28px",
    },
    span: {
      fontSize: "30px",
    },
  },
}));
const WelcomeScreen = () => {
  const text = "Portfolio";
  return (
    <MainContainer>
      <Responsive sx={{ display: "flex", alignItems: "center" }}>
        <Fragment>{"<"}</Fragment>
        <LoadingText data-text={text}>{text}</LoadingText>
        <Fragment>{"/>"}</Fragment>
      </Responsive>
    </MainContainer>
  );
};
export default WelcomeScreen;
