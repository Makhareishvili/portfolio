import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import makeStyles from "@mui/styles/makeStyles";
import { useEffect, useState } from "react";
import { Theme } from "../../Themes/Theme";
import { Sling as Hamburger } from "hamburger-react";
const useStyle = makeStyles(() => ({
  defaultmainContainer: {
    position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    zIndex: 2,
  },
  activeMainContainer: {
    position: "fixed",
  },
  inActiveMainContainer: {
    position: "absolute",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `2px solid ${Theme.colors.blueBolt}`,
    borderRadius: "50%",
    height: "40px",
    width: "40px",
    "& p": {
      position: "relative",
      color: `${Theme.colors.blueBolt}`,
    },
    // animation
    animationDuration: "100ms",
    animationTimingFunction: "ease-in",
    animationFillMode: "forwards",
    transform: "scale(0)",
    animationDelay: "400ms",
    animationName: "$listLoad",
  },
  listContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& ul": {
      listStyleType: "none",
      display: "flex",
    },
    "& li": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: `${Theme.colors.gainsBoro}`,
      margin: "0 10px",
      cursor: "pointer",
      // animation
      animationDuration: "100ms",
      animationTimingFunction: "ease-in",
      animationFillMode: "forwards",
      transform: "scale(0)",

      // childrens
      "&:first-child": {
        animationDelay: "400ms",
        animationName: "$listLoad",
      },
      "&:nth-child(2)": {
        animationDelay: "500ms",
        animationName: "$listLoad",
      },
      "&:nth-child(3)": {
        animationDelay: "600ms",
        animationName: "$listLoad",
      },
      "&:last-child": {
        animationDelay: "700ms",
        animationName: "$listLoad",
      },
    },
    "& a": {
      fontSize: "18px",
      "&:hover": {
        color: `${Theme.colors.blueBolt}`,
        transition: ".5s ease",
      },
    },
  },
  bookButton: {
    // animation
    animationDuration: "100ms",
    animationTimingFunction: "ease-in",
    animationFillMode: "forwards",
    transform: "scale(0)",
    animationDelay: "800ms",
    animationName: "$listLoad",
  },
  // Menu for tablets/mobiles
  mainMenuContainer: {
    width: "70%",
    height: "100vh",
    position: "fixed",
    right: 0,
    backgroundColor: `${Theme.colors.nero}`,
    zIndex: 1,
    // animation
    animation: ".3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    //
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& ul": {
      listStyleType: "none",
      display: "flex",
      flexDirection: "column",
    },
    "& li": {
      margin: "0 auto 30px",
      color: `${Theme.colors.gainsBoro}`,
    },
  },
  openMenuContainer: {
    animationName: "$openMenuAnimation",
  },
  closeMenuContainer: {
    animationName: "$closeMenuAnimation",
  },
  "@keyframes listLoad": {
    "0%": {
      color: `${Theme.colors.blueBolt}`,
      transform: "translateY(-30%)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
  "@keyframes openMenuAnimation": {
    "0%": {
      WebkitTransform: "translateX(100%)",
      transform: "translateX(100%)",
    },
    "100%": {
      WebkitTransform: "translateX(0%)",
      transform: "translateX(0%)",
    },
  },
  "@keyframes closeMenuAnimation": {
    "0%": {
      WebkitTransform: "translateX(0%)",
      transform: "translateX(0%)",
    },
    "100%": {
      WebkitTransform: "translateX(100%)",
      transform: "translateX(100%)",
    },
  },
}));
const NavbarList = (): JSX.Element => {
  return (
    <ul>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Portfolio</a>
      </li>
      <li>
        <a>Education</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </ul>
  );
};
const BookButton = ({ classes, isOpen }: any): JSX.Element => {
  return (
    <Button
      variant="contained"
      className={classes.bookButton}
      sx={{ display: isOpen || isOpen === null ? "flex" : "none" }}
    >
      Book a meeting
    </Button>
  );
};

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollUp, setScrollUp] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setScrollUp(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  useEffect(() => {
    // Update the CSS 'overflow' property of the 'body' element
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  console.log("is open :", isOpen);
  const classes = useStyle();
  const theme = useTheme();
  const breakPointTablet = useMediaQuery(theme.breakpoints.down("laptop"));
  return (
    <>
      <Box
        className={`${classes.defaultmainContainer} ${
          scrollUp ? classes.activeMainContainer : classes.inActiveMainContainer
        }`}
      >
        <Box className={classes.logoContainer}>
          <p>M</p>
        </Box>
        {!breakPointTablet ? (
          <>
            <Box
              className={classes.listContainer}
              sx={{ display: breakPointTablet ? "none" : "flex" }}
            >
              <NavbarList />
              <BookButton classes={classes} isOpen={isOpen} />
            </Box>
          </>
        ) : (
          <Box>
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              color={Theme.colors.blueBolt}
            />
          </Box>
        )}
      </Box>
      {breakPointTablet && isOpen !== null && (
        <>
          {isOpen ? (
            <>
              <Box
                className={`${classes.listContainer} ${classes.mainMenuContainer} ${classes.openMenuContainer}`}
              >
                <NavbarList />
                <BookButton classes={classes} isOpen={isOpen} />
              </Box>
            </>
          ) : (
            <Box
              className={`${classes.mainMenuContainer} ${classes.closeMenuContainer}`}
            >
              <NavbarList />
              <BookButton classes={classes} />
            </Box>
          )}
        </>
      )}
    </>
  );
};
export default Navbar;
