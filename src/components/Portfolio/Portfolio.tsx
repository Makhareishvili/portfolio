import { Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "../../Themes/Theme";
import { DATA } from "../../constants/projectsData/ProjectsData";
const useStyle = makeStyles(() => ({
  mainContainer: {
    margin: "0 400px",
    padding: "100px 0",
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
    marginBottom: "100px",
  },
  projectImgContainer: {
    // flex: 1,
    maxWidth: "70%",
    borderRadius: "7px",
    backgroundColor: `${Theme.colors.blueBolt}`,
    "& img": {
      width: "100%",
      height: "100%",
      opacity: 0.9,
      transitionDuration: ".2s",
      cursor: "pointer",
      borderRadius: "5px",
      objectFit: "cover",
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
const ProjectComponent = ({ classes, projectInfo }: any): any => {
  return (
    <Box className={classes.contentContainer}>
      <Box className={classes.projectImgContainer}>
        <img src={projectInfo.pic} alt="first project img" />
      </Box>
      <Box className={classes.projectContentContainer}>
        <p>{projectInfo.name}</p>
        <p>{projectInfo.header}</p>
        <Box className={classes.descriptionContainer}>
          <p style={{ lineHeight: "1.3em" }}>{projectInfo.content}</p>
        </Box>
        <Box className={classes.techList}>
          <p>{projectInfo.techList.first}</p>
          <p>{projectInfo.techList.second}</p>
          <p>{projectInfo.techList.third}</p>
          <p>{projectInfo.techList.fourth}</p>
        </Box>
      </Box>
    </Box>
  );
};
const Portfolio = () => {
  const classes = useStyle();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.headingContainer}>
        <p>Portfolio</p>
        <Box />
      </Box>
      <ProjectComponent classes={classes} projectInfo={DATA.gptProject} />
      <ProjectComponent classes={classes} projectInfo={DATA.fullMoonProject} />
    </Box>
  );
};
export default Portfolio;
