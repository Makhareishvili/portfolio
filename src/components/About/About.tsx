import { Box, Theme } from "@mui/material";
import { DefaultThemes } from "../../Themes/DefaultThemes";
import photo from "../../assets/photos/mads.png";
import GeneralHeader from "../GenerealHEader/GeneralHeader";
import { motion } from "framer-motion";
import { styled } from "@mui/system";
const MainContainer = styled(motion.div)(({ theme }) => ({
  paddingBottom: "100px",
  margin: "0px auto",
  maxWidth: "900px",
  [theme.breakpoints.down("desktop")]: {
    maxWidth: "600px",
  },
}));
const ContentContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "3fr 2fr",
  gap: "50px",
  [theme.breakpoints.down("laptop")]: {
    display: "block",
  },
}));
const InnerContentContainer = styled("div")(({ theme }) => ({
  flex: "2",
  width: "100%",
  height: "100%",
  "& p": {
    color: `${DefaultThemes.colors.gainsBoro}`,
    lineHeight: "1.3em",
    marginBottom: "10px",
    fontSize: "15px",
    letterSpacing: "0.05em",
  },
  "& ul": {
    listStyleType: "none",
    display: "flex",
    flexWrap: "wrap",
    "& li": {
      width: "40%",
      marginBottom: "10px",
      padding: "5px",
      color: `${DefaultThemes.colors.gainsBoro}`,
      "&:before": {
        content: `"➤"`,
        padding: "5px",
        color: `${DefaultThemes.colors.blueBolt}`,
      },
      "&:last-of-type": {
        width: "60%",
      },
    },
  },
  [theme.breakpoints.down("desktop")]: {
    "& p": {
      fontSize: "14px",
    },
    "& ul": {
      "& li": {
        fontSize: "14px",
        "&:before": {
          padding: "5px",
        },
        "&:last-of-type": {
          width: "60%",
        },
      },
    },
  },
}));
const InnerPhotoContainer = styled("div")(({ theme }) => ({
  flex: 1,
  maxWidth: "300px",
  [theme.breakpoints.down("laptop")]: {
    margin: "50px auto 0px",
  },
}));
const ResponsivePhotoContainer = styled("div")({
  position: "relative",
});
const VisualContainer = styled("div")({
  width: "100%",
  height: "100%",
  border: `3px solid ${DefaultThemes.colors.blueBolt}`,
  position: "absolute",
  top: 0,
  margin: "20px",
  zIndex: 0,
  borderRadius: "10px",
  transitionDuration: "0.2s",
});
const PhotoBackgroundContainer = styled("div")({
  backgroundColor: `${DefaultThemes.colors.blueBolt}`,
  position: "relative",
  zIndex: 1,
  paddingBottom: "100%",
  height: 0,
  width: "100%",
  borderRadius: "12px",
  "& img": {
    opacity: 0.9,
    zIndex: 2,
    objectFit: "cover",
    height: "100%",
    width: "100%",
    position: "absolute",
    borderRadius: "10px",
    transitionDuration: "0.2s",
    "&:hover": {
      opacity: 1,
    },
  },
  "&:hover ~ .VisualContainer": {
    margin: "15px",
  },
});
const divAnimate = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
};
const About = () => {
  return (
    <MainContainer
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.1 }}
      variants={divAnimate}
      id="about"
    >
      <GeneralHeader heading={"About me"} />
      <ContentContainer>
        <InnerContentContainer>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul>
            <li>TypeScript</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Material UI</li>
            <li>React</li>
            <li>Styled Componenets</li>
          </ul>
        </InnerContentContainer>
        {/*     P h o t o        s e c t  i o n    */}
        <InnerPhotoContainer>
          <ResponsivePhotoContainer>
            <PhotoBackgroundContainer>
              <img src={photo} alt="img" />
            </PhotoBackgroundContainer>
            <VisualContainer className="VisualContainer" />
          </ResponsivePhotoContainer>
        </InnerPhotoContainer>
      </ContentContainer>
    </MainContainer>
  );
};
export default About;
