import gptPic from "../../assets/photos/GPT-3.png";
import fullMoonImage from "../../assets/photos/Full-moon.png";
import ticTac from "../../assets/photos/ticTac.png";
import toDoApp from "../../assets/photos/todoapp.png";
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
    name: "FULL-MOON",
    header: "Restaurant",
    content:
      "Is Mads Mikkelsen a chef ? - I can cook, but I often eat alone when I do it, let's put it that way. (Laughs) I'm not the biggest chef in the world so that is something I have to act out.",
    techList: ["TypeScript", "React", "CSS"],
  },
  {
    link: "https://makhareishvili.github.io/GPT-3/",
    pic: gptPic,
    name: "GPT-3",
    header: "OpenAI",
    content:
      "Let's Build Something amazing with GPT-3 OpenAI. The possibilities are beyond your imagination.",
    techList: ["TypeScript", "React", "CSS"],
  },
  {
    link: "https://makhareishvili.github.io/to-do-list-app/",
    pic: toDoApp,
    name: "To-do",
    header: "App",
    content:
      "ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do.It is helpful in planning our daily schedules.",
    techList: ["TypeScript", "React", "Sass"],
  },
  {
    link: "https://makhareishvili.github.io/Tic-tac-toe/",
    pic: ticTac,
    name: "Tic tac toe",
    header: "Game",
    content:
      "a game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares.",
    techList: ["TypeScript", "React", "CSS"],
  },
];
