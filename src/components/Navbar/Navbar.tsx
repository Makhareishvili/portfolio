import { Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import { DefaultThemes } from "../../Themes/DefaultThemes";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";
import { css, keyframes, styled } from "@mui/system";
import { rgba } from "polished";
interface NavbarListProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  closeOpen?: boolean;
}
interface DefaultmainContainerProps {
  scrollUp: boolean | null;
  prevScrollPos: number;
  isOpen: boolean;
}
interface MainMenuContainerProps {
  isOpen: boolean;
}
interface BookButtonAnchorProps {
  isOpen: boolean;
}
const listLoad = keyframes({
  from: {
    color: DefaultThemes.colors.blueBolt,
    transform: "translateY(-30%)",
  },
  to: {
    transform: "translateY(0)",
  },
});
const animationSlideBottom = keyframes({
  from: {
    transform: "translateY(-100%)",
  },
  to: {
    transform: "translateY(0%)",
  },
});
const animationSlideTop = keyframes({
  from: {
    transform: "translateY(0%)",
  },
  to: {
    transform: "translateY(-110%)",
  },
});
const openMenuAnimation = keyframes({
  from: {
    WebkitTransform: "translateX(100%)",
    transform: "translateX(100%)",
  },
  to: {
    WebkitTransform: "translateX(0%)",
    transform: "translateX(0%)",
  },
});
const closeMenuAnim = keyframes({
  from: {
    WebkitTransform: "translateX(0%)",
    transform: "translateX(0%)",
  },
  to: {
    WebkitTransform: "translateX(100%)",
    transform: "translateX(100%)",
  },
});
const DefaultmainContainer = styled("div")<DefaultmainContainerProps>`
  background-color: ${rgba(
    parseInt(DefaultThemes.colors.backgroundInRGB.r),
    parseInt(DefaultThemes.colors.backgroundInRGB.g),
    parseInt(DefaultThemes.colors.backgroundInRGB.b),
    0.9
  )};
  position: absolute;
  animation: ${({ scrollUp, isOpen }) =>
    scrollUp || scrollUp === null || isOpen
      ? css`
          ${animationSlideBottom} .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `
      : css`
          ${animationSlideTop} .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};
  position: ${({ scrollUp }) =>
    scrollUp || scrollUp === null ? "fixed" : "fixed"};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  z-index: 4;
  box-shadow: rgba(0, 2, 5, 0.679) 0px 10px 10px -10px;
  box-shadow: ${({ prevScrollPos, isOpen }) =>
    (prevScrollPos == 0 || isOpen) && "unset"};
  background: ${({ isOpen }) => isOpen && "none"};
  transition: ${({ prevScrollPos }) =>
    prevScrollPos == 0 && "box-shadow 1s ease"};
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    padding: 15px;
    /* height: 50px; */
  }
`;
const LogoContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${DefaultThemes.colors.blueBolt};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  font-weight: 600;
  cursor: pointer;
  & p {
    position: relative;
    color: ${DefaultThemes.colors.blueBolt};
  }
  // animation
  animation-duration: 100ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  transform: scale(0);
  animation-delay: 400ms;
  animation-name: ${listLoad};
  ${({ theme }) => theme.breakpoints.up("tablet")} {
    width: 50px;
    height: 50px;
    & p {
      font-size: 20px;
    }
  }
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    width: 32px;
    height: 32px;
    & p {
      font-size: 15px;
    }
  }
`;
const ListContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  & ul {
    list-style-type: none;
    display: flex;
  }
  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${DefaultThemes.colors.gainsBoro};
    margin: 0 10px;
    cursor: pointer;
    // animation
    animation-duration: 100ms;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    transform: scale(0);

    // childrens
    &:first-of-type {
      animation-delay: 400ms;
      animation-name: ${listLoad};
    }
    &:nth-of-type(2) {
      animation-delay: 500ms;
      animation-name: ${listLoad};
    }
    &:nth-of-type(3) {
      animation-delay: 600ms;
      animation-name: ${listLoad};
    }
    &:last-of-type {
      animation-delay: 700ms;
      animation-name: ${listLoad};
    }
  }
  & a {
    font-size: 18px;
    &:hover {
      color: ${DefaultThemes.colors.blueBolt};
      transition: 0.5s ease;
    }
    &.active {
      color: ${DefaultThemes.colors.blueBolt};
    }
  }
`;
const BookButtonAnchor = styled("a")<BookButtonAnchorProps>`
  text-decoration: none;
  ${({ isOpen }) =>
    isOpen &&
    css`
      // animation
      animation-duration: 100ms;
      animation-timing-function: ease-in;
      animation-fill-mode: forwards;
      transform: scale(0);
      animation-delay: 800ms;
      display: flex;
      animation-name: ${listLoad};
    `}
`;
const MainMenuContainer = styled("div")<MainMenuContainerProps>`
  width: 70%;
  height: 100vh;
  position: fixed;
  right: 0;
  background-color: ${DefaultThemes.colors.nero};
  z-index: 3;
  // animation
  animation: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  //
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
  }
  & li {
    margin: 0 auto 30px;
    color: ${DefaultThemes.colors.gainsBoro};
  }
  animation-name: ${({ isOpen }) =>
    isOpen ? openMenuAnimation : closeMenuAnim};
  ${({ isOpen }) =>
    isOpen &&
    css`
    animation-name: ${openMenuAnimation},
    display: flex;
    justify-content: center;
    align-items: center;
    & ul {
    list-style-type: none;
    display: flex;
    }
    & li {
    display: flex;
    justify-content: center;
    align-items: "center";
    color: ${DefaultThemes.colors.gainsBoro};
    /* margin: 10px; */
    cursor: pointer;
    // animation
    animation-duration: 100ms;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    transform: scale(0);

    // childrens
    &:first-of-type {
      animation-delay: 400ms;
      animation-name: ${listLoad};
    }
    &:nth-of-type(2) {
      animation-delay: 500ms;
      animation-name: ${listLoad};
    }
    &:nth-of-type(3) {
      animation-delay: 600ms;
      animation-name: ${listLoad};
    }
    &:last-of-type {
      animation-delay: 700ms;
      animation-name: ${listLoad};
    }
  }
  & a {
    font-size: 18px;
    &:hover {
      color: ${DefaultThemes.colors.blueBolt};
      transition: .5s ease;
    }
  }
    `};
`;
const handleListLink = ({ setIsOpen, closeOpen }: NavbarListProps) => {
  if (closeOpen) {
    setIsOpen && setIsOpen(false);
  }
};
const NavbarList = ({ setIsOpen, closeOpen }: NavbarListProps): JSX.Element => {
  return (
    <ul>
      <li>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          to="about"
          duration={1000}
          offset={-150}
          onClick={() => handleListLink({ setIsOpen, closeOpen })}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          smooth={true}
          to="portfolio"
          duration={1000}
          offset={-150}
          spy={true}
          onClick={() => handleListLink({ setIsOpen, closeOpen })}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          to="education"
          duration={1000}
          offset={-150}
          onClick={() => handleListLink({ setIsOpen, closeOpen })}
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          to="contact"
          duration={1000}
          offset={100}
          onClick={() => handleListLink({ setIsOpen, closeOpen })}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};
const BookButton = ({ isOpen }: any): JSX.Element => {
  return (
    <BookButtonAnchor isOpen={isOpen} href="mailto:levanimakharei7li@gmail.com">
      <Button
        sx={{ backgroundColor: "#2c87e9", borderRadius: "20px" }}
        variant="contained"
      >
        Book a meeting
      </Button>
    </BookButtonAnchor>
  );
};
const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollUp, setScrollUp] = useState<boolean | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [closeOpen, setCloseOpen] = useState<boolean>(false);
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
    if (isOpen) {
      setCloseOpen(true);
    }
    // Update the CSS 'overflow' property of the 'body' element
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    const element = document.getElementById("mainRootContainer");
    if (element) {
      element.style.filter = isOpen ? "blur(4px) brightness(.7)" : "unset";
    }
  }, [isOpen]);
  const theme = useTheme();
  const breakPointTablet = useMediaQuery(theme.breakpoints.down("laptop"));
  return (
    <>
      <DefaultmainContainer
        scrollUp={scrollUp}
        prevScrollPos={prevScrollPos}
        isOpen={isOpen}
        ref={navbarRef}
      >
        <Link to="header" smooth>
          <LogoContainer>
            <p> M </p>
          </LogoContainer>
        </Link>
        {!breakPointTablet ? (
          <>
            <ListContainer
              style={{ display: breakPointTablet ? "none" : "flex" }}
            >
              <NavbarList />
              <BookButton isOpen={true} />
            </ListContainer>
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
      </DefaultmainContainer>
      {breakPointTablet && (
        <>
          {isOpen && (
            <>
              <MainMenuContainer isOpen={true}>
                <NavbarList setIsOpen={setIsOpen} closeOpen={closeOpen} />
                <BookButton isOpen={isOpen} />
              </MainMenuContainer>
            </>
          )}
          {closeOpen && !isOpen && (
            <MainMenuContainer isOpen={false}>
              <NavbarList />
              <BookButton isOpen={isOpen} />
            </MainMenuContainer>
          )}
        </>
      )}
    </>
  );
};
export default Navbar;
