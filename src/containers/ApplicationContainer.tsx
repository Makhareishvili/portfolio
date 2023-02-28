import {
  AboutContainer,
  ContactContainer,
  EducationContainer,
  HeaderContainer,
  NavbarContainer,
  PortfolioContainer,
} from "./Containers";
function ApplicationContainer() {
  return (
    <div>
      <NavbarContainer />
      <HeaderContainer />
      <AboutContainer />
      <PortfolioContainer />
      <EducationContainer />
      <ContactContainer />
    </div>
  );
}

export default ApplicationContainer;
