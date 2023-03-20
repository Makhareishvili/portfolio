import { Link, useMediaQuery } from "@mui/material";
import { DefaultThemes } from "../../Themes/DefaultThemes";
import { DATA, IDATA } from "../../constants/ProjectsData/ProjectsData";
import GeneralHeader from "../GenerealHEader/GeneralHeader";
import { motion } from "framer-motion";
import { styled, useTheme } from "@mui/system";
interface IprojectComponent {
  index: number;
  projectInfo: IDATA;
}
interface ContentContainerProps {
  index: number;
}
const MainContainer = styled(motion.div)({
  maxWidth: "1000px",
  margin: "0px auto",
  height: "100%",
});
const ContentContainer = styled("div")<ContentContainerProps>`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 100px;
  justify-content: ${({ index }) => index === 1 && "flex-end"};
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    margin-bottom: 30px;
  }
`;
const ProjectImgContainer = styled("div")(({ theme }) => ({
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
}));
const ProjectContentContainer = styled("div")<ContentContainerProps>(
  ({ theme, index }) => ({
    color: DefaultThemes.colors.gainsBoro,
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    height: "100%",
    width: "40%",
    right: "0",
    left: `${index === 1 && 0}`,
    "& p": {
      textAlign: `${index === 1 ? "left" : "right"}`,
    },
    [theme.breakpoints.down("desktop")]: {
      width: "100%",
      right: 0,
      padding: "40px",
      "& p": {
        textAlign: "left",
      },
    },
    [theme.breakpoints.down("laptop")]: {
      "& p:first-of-type": {
        fontSize: "18px",
      },
      "& p:nth-of-type(2)": {
        fontSize: "16px",
      },
      "& div:first-of-type": {
        "& p": {
          color: "#8892b0",
          fontSize: "14px",
        },
      },
      "& div:nth-of-type(2)": {
        "& p": {
          fontSize: "12px",
        },
      },
    },
    [theme.breakpoints.down("tablet")]: {
      padding: "0 10px",
      "& p:first-of-type": {
        fontSize: "14px",
      },
      "& p:nth-of-type(2)": {
        fontSize: "12px",
      },
      "& div:first-of-type": {
        "& p": {
          color: "#8892b0",
          fontSize: "10px",
        },
      },
      "& div:nth-of-type(2)": {
        "& p": {
          fontSize: "8px",
          margin: "4px",
          marginLeft: 0,
        },
      },
    },
  })
);
const DescriptionContainer = styled("div")(({ theme }) => ({
  padding: "25px",
  backgroundColor: `${DefaultThemes.colors.nero}`,
  borderRadius: "5px",
  [theme.breakpoints.down("desktop")]: {
    backgroundColor: "unset",
    padding: "0",
  },
}));
const TechList = styled("div")<ContentContainerProps>(({ theme, index }) => ({
  display: "flex",
  justifyContent: `${index == 1 ? "flex-start" : "flex-end"}`,
  "& p": {
    margin: "10px",
    color: DefaultThemes.colors.blueBolt,
  },
  "& p:last-of-type": {
    marginLeft: `${index == 1 && 0}`,
  },
  [theme.breakpoints.down("desktop")]: {
    justifyContent: "flex-start",
    padding: "0",
    "& p:first-of-type": {
      marginLeft: 0,
    },
  },
}));
const ProjectComponent = ({
  index,
  projectInfo,
}: IprojectComponent): JSX.Element => {
  const theme = useTheme();
  const breakPointTablet = useMediaQuery(theme.breakpoints.down("desktop"));
  return (
    <ContentContainer
      index={index}
      onClick={() => {
        breakPointTablet && window.open(projectInfo.link, "_blank");
      }}
    >
      <ProjectImgContainer
        onClick={() => {
          window.open(projectInfo.link, "_blank");
        }}
      >
        <img src={projectInfo.pic} alt="first project img" />
      </ProjectImgContainer>
      <ProjectContentContainer index={index}>
        <p style={{ color: "#87a2f9" }}>{projectInfo.name}</p>
        <p>{projectInfo.header}</p>
        <DescriptionContainer>
          <p style={{ lineHeight: "1.3em" }}>{projectInfo.content}</p>
        </DescriptionContainer>
        <TechList index={index}>
          {projectInfo.techList.map((tech: string, index: number) => (
            <p key={tech + index}>{tech}</p>
          ))}
        </TechList>
      </ProjectContentContainer>
    </ContentContainer>
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
  return (
    <MainContainer
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.1 }}
      variants={divAnimate}
      id="portfolio"
    >
      <GeneralHeader heading={"Portfolio"} />
      {DATA.map((data: IDATA, ind: number) => {
        let index = ind % 2;
        return <ProjectComponent key={ind} index={index} projectInfo={data} />;
      })}
    </MainContainer>
  );
};
export default Portfolio;
