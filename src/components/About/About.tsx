import { Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "../../Themes/Theme";
import photo from "../../assets/photos/mads.png";
const useStyles = makeStyles(() => ({
  mainContainer: {
    margin: "0 200px",
    padding: "100px 0",
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
    justifyContent: "space-between",
    flexWrap: "wrap",
    color: "white",
    width: "100%",
    gap: "15px",
  },
  innerContentContainer: {
    flex: 2,
    width: "100%",
    height: "100%",
    // backgroundColor: "green",
    minWidth: "300px",
    "& p": {
      color: `${Theme.colors.gainsBoro}`,
      lineHeight: "1.3em",
      marginBottom: "10px",
      fontSize: "15px",
      letterSpacing: "0.05em",
    },
  },
  innerPhotoContainer: {
    flex: 1,
  },
  responsivePhotoContainer: {
    position: "relative",
  },
  photoBackgroundContainer: {
    backgroundColor: `${Theme.colors.blueBolt}`,
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
    "&:hover + $visualContainer": {
      margin: "15px",
    },
  },
  visualContainer: {
    width: "100%",
    height: "100%",
    border: `3px solid ${Theme.colors.blueBolt}`,
    position: "absolute",
    top: 0,
    margin: "20px",
    zIndex: 0,
    borderRadius: "10px",
    transitionDuration: "0.2s",
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
const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.headingContainer}>
        <p>About Me</p>
        <Box />
      </Box>
      <Box className={classes.contentContainer}>
        <Box className={classes.innerContentContainer}>
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
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </Box>
        {/*     P h o t o        s e c t  i o n    */}
        <Box className={classes.innerPhotoContainer}>
          <Box className={classes.responsivePhotoContainer}>
            <Box className={classes.photoBackgroundContainer}>
              <img src={photo} alt="img" />
            </Box>
            <Box className={classes.visualContainer} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default About;
