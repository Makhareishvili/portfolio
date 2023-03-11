import { Box, Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { DefaultThemes } from "../../Themes/DefaultThemes";
import { DATA } from "../../constants/ProjectsData/ProjectsData";
import GeneralHeader from "../GenerealHEader/GeneralHeader";
import { motion } from "framer-motion";

const useStyle = makeStyles((theme: Theme) => ({
  mainContainer: {
    maxWidth: "1000px",
    margin: "0px auto",
    padding: "100px 0",
    height: "100%",
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
  replacedContentContainer: {
    justifyContent: "flex-end",
  },
  replacedProjectContentContainer: {
    left: 0,
    "& p": {
      textAlign: "left",
    },
  },
  replacedTechList: {
    justifyContent: "flex-start",
    "& p": {
      "& p:last-child": {
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
const ProjectComponent = ({ index, classes, projectInfo }: any): any => {
  return (
    <Box
      className={`${classes.contentContainer} ${
        index == 1 && classes.replacedContentContainer
      }`}
    >
      <Box className={classes.projectImgContainer}>
        <img src={projectInfo.pic} alt="first project img" />
      </Box>
      <Box
        className={`${classes.projectContentContainer} ${
          index == 1 && classes.replacedProjectContentContainer
        }`}
      >
        <p>{projectInfo.name}</p>
        <p>{projectInfo.header}</p>
        <Box className={classes.descriptionContainer}>
          <p style={{ lineHeight: "1.3em" }}>{projectInfo.content}</p>
        </Box>
        <Box
          className={`${classes.techList} ${
            index == 1 && classes.replacedTechList
          }`}
        >
          {projectInfo.techList.map((tech: string, index: number) => (
            <p key={tech + index}>{tech}</p>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
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
const Portfolio = () => {
  const classes = useStyle();
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.1 }}
      variants={divAnimate}
      className={classes.mainContainer}
    >
      <GeneralHeader heading={"Portofio"} />
      {DATA.map((data, ind) => {
        let index = ind % 2;
        return (
          <ProjectComponent
            key={ind}
            index={index}
            classes={classes}
            projectInfo={data}
          />
        );
      })}
    </motion.div>
  );
};
export default Portfolio;
