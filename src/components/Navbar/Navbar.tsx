import { Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { useEffect, useRef, useState } from "react";
import { DefaultThemes } from "../../Themes/DefaultThemes";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";
const useStyle = makeStyles(() => ({
  defaultmainContainer: {
    backgroundColor: `rgba(
      ${DefaultThemes.colors.backgroundInRGB.r},
      ${DefaultThemes.colors.backgroundInRGB.g},
      ${DefaultThemes.colors.backgroundInRGB.b},0.9)`,
    position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    zIndex: 4,
    boxShadow: "rgba(0, 2, 5, 0.679) 0px 10px 10px -10px",
  },
  activeMainContainer: {
    position: "fixed",
    animation:
      "$animationSlideBottom .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  },
  inActiveMainContainer: {
    // position: "absolute",
    position: "fixed",
    animation:
      "$animationSlideTop .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  },
  shadowContainer: {
    boxShadow: "unset",
    transition: "box-shadow 1s ease",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `2px solid ${DefaultThemes.colors.blueBolt}`,
    borderRadius: "50%",
    height: "40px",
    width: "40px",
    cursor: "pointer",
    "& p": {
      position: "relative",
      color: `${DefaultThemes.colors.blueBolt}`,
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
      color: `${DefaultThemes.colors.gainsBoro}`,
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
        color: `${DefaultThemes.colors.blueBolt}`,
        transition: ".5s ease",
      },
    },
  },
  bookButton: {
    textDecoration: "none",
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
    backgroundColor: `${DefaultThemes.colors.nero}`,
    zIndex: 3,
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
      color: `${DefaultThemes.colors.gainsBoro}`,
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
      color: `${DefaultThemes.colors.blueBolt}`,
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
  "@keyframes animationSlideBottom": {
    "0%": {
      WebkitTransform: "translateY(-100%)",
    },
    "100%": {
      WebkitTransform: "translateY(0%)",
    },
  },
  "@keyframes animationSlideTop": {
    "0%": {
      WebkitTransform: "translateY(0%)",
    },
    "100%": {
      WebkitTransform: "translateY(-110%)",
    },
  },
}));
const NavbarList = (): JSX.Element => {
  return (
    <ul>
      <li>
        <Link smooth={true} to="about" duration={1000} offset={0}>
          About
        </Link>
      </li>
      <li>
        <Link smooth={true} to="portfolio" duration={1000} offset={0}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link smooth={true} to="education" duration={1000} offset={0}>
          Education
        </Link>
      </li>
      <li>
        <Link smooth={true} to="contact" duration={1000} offset={200}>
          Contact
        </Link>
      </li>
    </ul>
  );
};
const BookButton = ({ classes, isOpen }: any): JSX.Element => {
  return (
    <a
      style={{ display: isOpen || isOpen === null ? "flex" : "none" }}
      className={classes.bookButton}
      href="mailto:levanimakharei7li@gmail.com"
    >
      <Button
        sx={{ backgroundColor: "#2c87e9", borderRadius: "20px" }}
        variant="contained"
      >
        Book a meeting
      </Button>
    </a>
  );
};
const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollUp, setScrollUp] = useState<boolean | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navbarRef = useRef(null);
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

  const classes = useStyle();
  const theme = useTheme();
  const breakPointTablet = useMediaQuery(theme.breakpoints.down("laptop"));
  return (
    <>
      <Box
        ref={navbarRef}
        className={`${classes.defaultmainContainer} ${
          scrollUp || scrollUp == null
            ? classes.activeMainContainer
            : classes.inActiveMainContainer
        } ${prevScrollPos == 0 && classes.shadowContainer}`}
      >
        <Link to="header" smooth>
          <Box className={classes.logoContainer}>
            <p> M </p>
          </Box>
        </Link>
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
              color={DefaultThemes.colors.blueBolt}
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
