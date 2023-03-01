import { useEffect, useState } from "react";
import { Theme } from "../Themes/Theme";
import {
  AboutContainer,
  ContactContainer,
  EducationContainer,
  HeaderContainer,
  NavbarContainer,
  PortfolioContainer,
  WelcomeScreenContainer,
} from "./Containers";
function ApplicationContainer() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {!loading ? (
        <WelcomeScreenContainer />
      ) : (
        <>
          <NavbarContainer />
          <HeaderContainer />
          <AboutContainer />
          <PortfolioContainer />
          <EducationContainer />
          <ContactContainer />
        </>
      )}
    </>
  );
}
export default ApplicationContainer;
function useEfect(arg0: () => void) {
  throw new Error("Function not implemented.");
}
