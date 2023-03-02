import { Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useEffect, useState } from "react";
import {
  AboutContainer,
  ContactContainer,
  EducationContainer,
  HeaderContainer,
  NavbarContainer,
  PortfolioContainer,
  WelcomeScreenContainer,
} from "./Containers";
const useStyles = makeStyles(() => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 200px",
  },
}));
function ApplicationContainer() {
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
          <Box className={classes.mainContainer}>
            <HeaderContainer />
            <AboutContainer />
            <PortfolioContainer />
            <EducationContainer />
            <ContactContainer />
          </Box>
        </>
      )}
    </>
  );
}
export default ApplicationContainer;
