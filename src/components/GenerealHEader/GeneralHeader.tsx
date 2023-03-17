import { Box, Theme } from "@mui/material";
import { styled } from "@mui/system";
import { DefaultThemes } from "../../Themes/DefaultThemes";
interface Props {
  heading: string;
}
const HeadingContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: "10px 0 40px",
  minWidth: "150px",
  "& p": {
    fontSize: "28px",
    color: `${DefaultThemes.colors.blueBolt}`,
  },
  "& div": {
    marginLeft: "2rem",
    backgroundColor: `${DefaultThemes.colors.dimGray}`,
    width: "300px",
    height: "1px",
    opacity: ".2",
    [theme.breakpoints.down("laptop")]: {
      width: "100%",
    },
  },
}));
const GeneralHeader = ({ heading }: Props) => {
  return (
    <HeadingContainer>
      <p>{heading + " />"}</p>
      <Box />
    </HeadingContainer>
  );
};
export default GeneralHeader;
