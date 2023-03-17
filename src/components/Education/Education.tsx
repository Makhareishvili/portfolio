import { Box } from "@mui/material";
import { EducationData } from "../../constants/EducationData/EducationData";
import { DefaultThemes } from "../../Themes/DefaultThemes";
import GeneralHeader from "../GenerealHEader/GeneralHeader";
import { motion } from "framer-motion";
import { styled } from "@mui/system";

const MainContainer = styled(motion.div)`
  // color: "#ccd6f6",
  // color: "#8892b0",

  max-width: 1000px;
  margin: 0px auto;
  padding: 100px 0;
  height: 100%;
  & h2 {
    color: #ccd6f6;
    text-align: center;
  }
`;
const ContentContainer = styled("div")`
  & p {
    color: #8892b0;
    margin-top: 20px;
    line-height: 1.3em;
    letter-spacing: 0.05em;
  }
  & div {
    padding: 20px 0;
    color: #ccd6f6;
    & ul {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      padding: 10px 20px;
      & li {
        width: calc(100% / 3);
        line-height: 1.5em;
        color: ${DefaultThemes.colors.blueBolt};
      }
    }
  }
  & span {
    color: ${DefaultThemes.colors.blueBolt};
  }
`;
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
          I've always been fascinated by the world of technology, even before I
          started studying computer science at Tbilisi State University. When I
          first started my program, I quickly realized that my passion for
          technology was only going to grow stronger. With each passing day, I
          found myself more and more immersed in the subject matter, spending
          countless hours poring over textbooks and tinkering with various
          technologies.
        </p>
        <p>
          Despite the rigorous demands of my coursework, I was determined to
          deepen my knowledge of the field outside of the university as well. I
          spent my free time teaching myself about the latest advancements in
          the industry, attending tech conferences, and experimenting with new
          technologies.
        </p>
        <p>
          Looking back on my journey, I can confidently say that my passion for
          technology has only grown stronger with each passing day. As I
          continue to explore this ever-evolving field, I am excited to see what
          new discoveries and advancements lie ahead.
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
