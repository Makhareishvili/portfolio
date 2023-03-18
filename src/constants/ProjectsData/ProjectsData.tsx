import gptPic from "../../assets/photos/GPT-3.png";
import fullMoonImage from "../../assets/photos/Full-moon.png";
import ticTac from "../../assets/photos/ticTac.png";
export interface IDATA {
  link: string;
  pic: string;
  name: string;
  header: string;
  content: string;
  techList: string[];
}
export const DATA: IDATA[] = [
  {
    link: "https://makhareishvili.github.io/full-moon-restaurant/",
    pic: fullMoonImage,
    name: "FULL-MOON Project",
    header: "Restaurant",
    content:
      "Is Mads Mikkelsen a chef ? - I can cook, but I often eat alone when I do it, let's put it that way. (Laughs) I'm not the biggest chef in the world so that is something I have to act out.",
    techList: ["TypeScript", "React", "CSS"],
  },
  {
    link: "https://makhareishvili.github.io/full-moon-restaurant/",
    pic: gptPic,
    name: "GPT-3 Project",
    header: "OpenAI",
    content:
      "Let's Build Something amazing with GPT-3 OpenAI. The possibilities are beyond your imagination.",
    techList: ["TypeScript", "React", "CSS"],
  },
  {
    link: "https://makhareishvili.github.io/full-moon-restaurant/",
    pic: ticTac,
    name: "Tic tac toe Project",
    header: "Game",
    content:
      "a game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares.",
    techList: ["TypeScript", "React", "CSS"],
  },
];
