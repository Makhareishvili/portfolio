import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { DefaultThemes } from "../Themes/DefaultThemes";
import {
  AboutContainer,
  ContactContainer,
  EducationContainer,
  HeaderContainer,
  NavbarContainer,
  PortfolioContainer,
  SideElementContainer,
  WelcomeScreenContainer,
} from "./Containers";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  backgroundColor: DefaultThemes.colors.background,
  [theme.breakpoints.up("mobile")]: {
    padding: "0 25px",
  },
  [theme.breakpoints.up("tablet")]: {
    padding: "0 50px",
  },
  [theme.breakpoints.up("laptop")]: {
    padding: "0 100px",
  },
  [theme.breakpoints.up(1200)]: {
    padding: "0 150px",
  },
}));
const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("mobile")]: {
    mainContainer: {
      padding: "0 25px",
    },
  },
}));
const ApplicationContainer = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <WelcomeScreenContainer />
      ) : (
        <>
          <NavbarContainer />
          <SideElementContainer />
          <Responsive>
            <MainContainer>
              <HeaderContainer />
              <AboutContainer />
              <PortfolioContainer />
              <EducationContainer />
              <ContactContainer />
            </MainContainer>
          </Responsive>
        </>
      )}
    </>
  );
};
export default ApplicationContainer;
