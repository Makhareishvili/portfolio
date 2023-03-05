import { Box, Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { DefaultThemes } from "../../Themes/DefaultThemes";
interface Props {
  heading: string;
}
const useStyle = makeStyles((theme: Theme) => ({
  headingContainer: {
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
      height: "0.005em",
      opacity: ".2",
      [theme.breakpoints.down("laptop")]: {
        width: "100%",
      },
    },
  },
}));
const GeneralHeader = ({ heading }: Props) => {
  const classes = useStyle();
  return (
    <Box className={classes.headingContainer}>
      <p>{heading}</p>
      <Box />
    </Box>
  );
};
export default GeneralHeader;
