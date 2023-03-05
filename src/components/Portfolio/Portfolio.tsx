import { Box, Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { DefaultThemes } from "../../Themes/DefaultThemes";
import { DATA } from "../../constants/projectsData/ProjectsData";
const useStyle = makeStyles((theme: Theme) => ({
  mainContainer: {
    maxWidth: "1000px",
    margin: "0px auto",
    padding: "100px 0",
    height: "100%",
  },
  headingContainer: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0 40px",
    "& p": {
      fontSize: "28px",
      color: `${DefaultThemes.colors.blueBolt}`,
    },
    "& div": {
      marginLeft: "2rem",
      backgroundColor: `${DefaultThemes.colors.dimGray}`,
      width: "300px",
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
    backgroundColor: `${DefaultThemes.colors.blueBolt}`,
    [theme.breakpoints.down("desktop")]: {
      maxWidth: "100%",
      opacity: 0.9,
      backgroundColor: "unset",
    },
    "& img": {
      width: "100%",
      height: "100%",
      opacity: 0.9,
      transitionDuration: ".2s",
      cursor: "pointer",
      borderRadius: "5px",
      objectFit: "cover",
      [theme.breakpoints.down("desktop")]: {
        opacity: 0.2,
      },
      "&:hover": {
        opacity: 1,
      },
    },
  },
  projectContentContainer: {
    color: `${DefaultThemes.colors.gainsBoro}`,
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
    [theme.breakpoints.down("desktop")]: {
      width: "100%",
      right: 0,
      padding: "40px",
      "& p": {
        textAlign: "left",
      },
    },
  },
  descriptionContainer: {
    padding: "25px",
    backgroundColor: `${DefaultThemes.colors.nero}`,
    borderRadius: "5px",
    [theme.breakpoints.down("desktop")]: {
      backgroundColor: "unset",
      padding: "0",
    },
  },
  techList: {
    display: "flex",
    justifyContent: "flex-end",
    "& p": {
      margin: "10px",
      color: `${DefaultThemes.colors.blueBolt}`,
    },
    "& p:last-child": {
      marginRight: 0,
    },
    [theme.breakpoints.down("desktop")]: {
      justifyContent: "flex-start",
      padding: "0",
      "& p:first-child": {
        marginLeft: 0,
      },
    },
  },
  // "@media (min-width: 481px)": {
  //   mainContainer: {
  //     margin: "0 25px",
  //   },
  // },
  // "@media (min-width: 769px)": {
  //   mainContainer: {
  //     margin: "0 100px",
  //   },
  // },
  // "@media (min-width: 1200px)": {
  //   mainContainer: {
  //     margin: "0 200px",
  //   },
  // },
  // "@media (min-width: 1700px)": {
  //   mainContainer: {
  //     margin: "0 300px",
  //   },
  // },
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
          {projectInfo.techList.map((tech: string, index: number) => (
            <p key={tech + index}>{tech}</p>
          ))}
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
      <ProjectComponent classes={classes} projectInfo={DATA.ticTacToeProject} />
    </Box>
  );
};
export default Portfolio;
