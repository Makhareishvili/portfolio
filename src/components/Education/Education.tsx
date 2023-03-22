import { Box } from "@mui/material";
import { EducationData } from "../../constants/EducationData/EducationData";
import { DefaultThemes } from "../../Themes/DefaultThemes";
import GeneralHeader from "../GenerealHEader/GeneralHeader";
import { motion } from "framer-motion";
import { styled } from "@mui/system";

const MainContainer = styled(motion.div)(({ theme }) => ({
  // color: "#ccd6f6",
  // color: "#8892b0",
  maxWidth: "1000px",
  margin: "0px auto",
  height: "100%",
  "& h2": {
    color: "#ccd6f6",
    textAlign: "center",
  },
  [theme.breakpoints.down("desktop")]: {
    "& h2": { fontSize: "18px" },
    paddingTop: "70px",
  },
}));
const ContentContainer = styled("div")(({ theme }) => ({
  "& p": {
    color: "#8892b0",
    marginTop: "20px",
    lineHeight: "1.3em",
    letterSpacing: "0.05em",
    [theme.breakpoints.down("desktop")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.down("tablet")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.up("desktop")]: {
      fontSize: "18px",
    },
  },
  "& h3": {
    [theme.breakpoints.down("desktop")]: {
      fontSize: "18px",
    },
  },
  "& div": {
    padding: "20px 0",
    color: "#ccd6f6",
    "& ul": {
      listStyleType: "none",
      display: "flex",
      flexWrap: "wrap",
      padding: "10px 20px",
      "& li": {
        width: "calc(100% / 3)",
        lineHeight: "1.5em",
        color: DefaultThemes.colors.blueBolt,
        [theme.breakpoints.down("desktop")]: {
          fontSize: "12px",
        },
      },
    },
  },
  "& span": {
    color: DefaultThemes.colors.blueBolt,
    [theme.breakpoints.down("tablet")]: {
      fontSize: "12px",
    },
  },
}));
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
const Education = () => {
  return (
    <MainContainer
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.1 }}
      variants={divAnimate}
      id="education"
    >
      <GeneralHeader heading={"Education"} />
      <h2>Passion for the Tech Industry and technical skills</h2>
      <ContentContainer>
        <p>
          It all started with a simple curiosity back in 2021. I was browsing
          the web when I stumbled upon a beautifully designed website. I was
          intrigued by how it worked and how the different elements came
          together to create a seamless user experience. I decided to dig deeper
          and discovered the world of web development. It felt like a puzzle
          waiting to be solved, and I was determined to unlock its secrets. I
          started with the basics, tinkering with colored texts, animated
          elements, inputs, and lists using HTML & CSS. As I experimented and
          explored, I uncovered the foundations of web development and realized
          that I wanted to dive deeper.
        </p>
        <p>
          I enrolled in the Computer Science program at Ivane Javakhishvili
          Tbilisi State University in 2021 and learned the fundamentals of
          programming languages, object-oriented programming, data structures,
          algorithms, and more. But that was just the beginning.
        </p>
        <p>
          I knew that if I wanted to excel in this field, I needed to
          continuously learn and grow beyond the classroom. So, I delved into
          independent studies and explored various technologies such as
          TypeScript, JavaScript, React.Js and others. To put my newfound
          knowledge to the test, I completed practical assignments on various
          platforms such as HackerRank, SoloLearn, FreeCodeCamp, and more. Each
          challenge I conquered gave me a sense of accomplishment and fueled my
          drive to learn more.
        </p>
        <Box>
          <h3>Skills:</h3>
          <p>
            ➠ Programming Fundamentals and Object-Oriented Programming Expert:
          </p>
          <ul>
            {EducationData.skills.oop.map((oop, index) => (
              <li key={oop + index}>{oop}</li>
            ))}
          </ul>
          <p>
            ➠ Hypertext Markup Language ( <span>HTML5</span> )
          </p>
          <p>
            ➠ Cascading style sheets ( <span>CSS3</span> )
          </p>
          <p>
            ➠ Javscript Library ( <span>React</span> )
          </p>
          <p>
            {" "}
            ➠ <span>Scss</span> / <span>Sass</span>
          </p>
          <p>
            ➠ <span>Material UI</span>
          </p>
          <p>
            ➠ <span>Styled components</span>
          </p>
          <p>
            ➠ <span>Git</span>
          </p>
        </Box>
      </ContentContainer>
    </MainContainer>
  );
};
export default Education;
