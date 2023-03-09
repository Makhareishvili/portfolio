import { Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { DefaultThemes } from "../../Themes/DefaultThemes";
const useStyle = makeStyles(() => ({
  mainConteiner: {
    color: `#8892b0`,
  },
  leftContainer: {
    opacity: 0,
    animation: "$fadeIn 0.2s ease-out 2s forwards",
    width: "fit-content",
    height: "350px",
    position: "fixed",
    bottom: 0,
    left: 50,
    "& ul": {
      listStyleType: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
      "& a": {
        color: `#8892b0`,
      },
      "& svg": {
        fontSize: "1.5rem",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          color: `${DefaultThemes.colors.blueBolt}`,
          transform:
            "translateY(-4px)" /* adjust this value to move it up/down */,
        },
      },
      "& div": {
        height: "6rem",
        width: "0.05em",
        backgroundColor: `#8892b0`,
      },
    },
  },
  rightContainer: {
    opacity: 0,
    animation: "$fadeIn 0.2s ease-out 2s forwards",
    width: "fit-content",
    height: "350px",
    position: "fixed",
    bottom: 0,
    right: 50,
    "& ul": {
      listStyleType: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
      "& a": {
        color: "#8892b0",
        textDecoration: "none",
        fontSize: "14px",
        cursor: "pointer",
        writingMode: "vertical-rl",
        letterSpacing: ".1em",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          color: `${DefaultThemes.colors.blueBolt}`,
          transform:
            "translateY(-4px)" /* adjust this value to move it up/down */,
        },
      },
      "& div": {
        height: "4.8rem",
        width: "0.05em",
        backgroundColor: `#8892b0`,
      },
    },
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));
const SideElement = () => {
  const classes = useStyle();
  return (
    <Box className={classes.mainConteiner}>
      <Box className={classes.leftContainer}>
        <ul>
          <li>
            <a href="https://github.com/Makhareishvili">
              <GitHubIcon fontSize="large" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/makharei7liii">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a>
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a>
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Levani.Makhareishvili.0">
              <FacebookIcon />
            </a>
          </li>
          <Box />
        </ul>
      </Box>
      <Box className={classes.rightContainer}>
        <ul>
          <li>
            <a href="mailto:levanimakharei7li@gmail.com">
              levanimakharei7li@gmail.com
            </a>
          </li>
          <Box />
        </ul>
      </Box>
    </Box>
  );
};
export default SideElement;
