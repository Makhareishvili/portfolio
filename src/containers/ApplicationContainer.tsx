import { Box, styled } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useEffect, useState } from "react";
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
const useStyles = makeStyles(() => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  "@media (min-width: 0px)": {
    mainContainer: {
      padding: "0 25px",
    },
  },
  "@media (min-width: 481px)": {
    mainContainer: {
      padding: "0 50px",
    },
  },
  "@media (min-width: 769px)": {
    mainContainer: {
      padding: "0 100px",
    },
  },
  "@media (min-width: 1200px)": {
    mainContainer: {
      padding: "0 150px",
    },
  },
}));
const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("mobile")]: {
    mainContainer: {
      padding: "0 25px",
    },
  },
  // [theme.breakpoints.up("tablet")]: {
  //   div: {
  //     padding: "0 50px",
  //   },
  // },
  // [theme.breakpoints.up("laptop")]: {
  //   div: {
  //     padding: "0 100px",
  //   },
  // },
  // [theme.breakpoints.up("tv")]: {
  //   div: {
  //     padding: "0 150px",
  //   },
  // },
}));
const ApplicationContainer = () => {
  const classes = useStyles();
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
            <Box className={classes.mainContainer}>
              <HeaderContainer />
              <AboutContainer />
              <PortfolioContainer />
              <EducationContainer />
              <ContactContainer />
            </Box>
          </Responsive>
        </>
      )}
    </>
  );
};
export default ApplicationContainer;
