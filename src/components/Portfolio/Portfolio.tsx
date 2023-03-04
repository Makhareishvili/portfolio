import { Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "../../Themes/Theme";
import firstProjectPic from "../../assets/photos/GPT-3.png";
const useStyle = makeStyles(() => ({
  mainContainer: {
    margin: "0 400px",
    height: "100vh",
  },
  headingContainer: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0 40px",
    "& p": {
      fontSize: "28px",
      color: `${Theme.colors.blueBolt}`,
    },
    "& div": {
      marginLeft: "2rem",
      backgroundColor: `${Theme.colors.dimGray}`,
      width: "200px",
      height: "0.005em",
      opacity: ".2",
    },
  },
  contentContainer: {
    display: "flex",
    position: "relative",
    width: "100%",
    gap: "20px",
  },
  projectImgContainer: {
    // flex: 1,
    maxWidth: "70%",
    backgroundColor: `${Theme.colors.blueBolt}`,
    "& img": {
      width: "100%",
      height: "100%",
      opacity: 0.9,
      transitionDuration: ".2s",
      cursor: "pointer",
      "&:hover": {
        opacity: 1,
      },
    },
  },
  projectContentContainer: {
    color: `${Theme.colors.gainsBoro}`,
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    height: "100%",
    width: "40%",
    right: 0,
    "& p": {
      textAlign: "right",
    },
  },
  descriptionContainer: {
    padding: "25px",
    backgroundColor: `${Theme.colors.nero}`,
    borderRadius: "5px",
  },
  techList: {
    display: "flex",
    justifyContent: "flex-end",
    "& p": {
      margin: "10px",
    },
    "& p:last-child": {
      marginRight: 0,
    },
  },
  "@media (min-width: 481px)": {
    mainContainer: {
      margin: "0 25px",
    },
  },
  "@media (min-width: 769px)": {
    mainContainer: {
      margin: "0 100px",
    },
  },
  "@media (min-width: 1200px)": {
    mainContainer: {
      margin: "0 200px",
    },
  },
  "@media (min-width: 1700px)": {
    mainContainer: {
      margin: "0 300px",
    },
  },
}));
const Portfolio = () => {
  const classes = useStyle();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.headingContainer}>
        <p>Portfolio</p>
        <Box />
      </Box>
      <Box className={classes.contentContainer}>
        <Box className={classes.projectImgContainer}>
          <img src={firstProjectPic} alt="first project img" />
        </Box>
        <Box className={classes.projectContentContainer}>
          <p>GPT-3 Project</p>
          <p>OpenAI</p>
          <Box className={classes.descriptionContainer}>
            <p>
              Let's Build Something amazing with GPT-3 OpenAI. The possibilities
              are beyond your imagination.
            </p>
          </Box>
          <Box className={classes.techList}>
            <p>TypeScript</p>
            <p>React</p>
            <p>HTML</p>
            <p>CSS</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Portfolio;
