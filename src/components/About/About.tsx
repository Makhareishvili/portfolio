import { Box, Theme } from "@mui/material";
import { DefaultThemes } from "../../Themes/DefaultThemes";
import photo from "../../assets/photos/Lm.png";
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
    color: `${DefaultThemes.colors.coolGrey}`,
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
      color: `${DefaultThemes.colors.coolGrey}`,
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
      fontSize: "12px",
    },
    "& ul": {
      "& li": {
        fontSize: "12px",
        "&:before": {
          padding: "5px",
        },
        "&:last-of-type": {
          width: "60%",
        },
      },
    },
  },
  [theme.breakpoints.up("laptop")]: {
    "& p": {
      fontSize: "18px",
    },
    "& ul": {
      "& li": {
        fontSize: "16px",
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
  [theme.breakpoints.down("tablet")]: {
    maxWidth: "230px",
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
            Hello! I am Levani, a web developer who enjoys creating beautiful
            and functional websites. My main focus is on developing my skills
            and improving my knowledge in the field. I am always looking for new
            challenges that can help me grow both personally and professionally.
            One of my favorite aspects of web development is finding and fixing
            bugs in code. I take pride in writing clear, concise, and efficient
            code that can be easily maintained and modified as needed.
          </p>
          <p>
            I am constantly seeking ways to improve my skills, whether it's
            through online courses, attending conferences, or networking with
            other professionals in the industry.
          </p>
          <p>
            Overall, I am passionate about web development and am always
            striving to learn and improve in this exciting and constantly
            evolving field.
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
