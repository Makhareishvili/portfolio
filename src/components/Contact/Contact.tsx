import { Box, Button, TextField, Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { DefaultThemes } from "../../Themes/DefaultThemes";
import GeneralHeader from "../GenerealHEader/GeneralHeader";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import LocationCitySharpIcon from "@mui/icons-material/LocationCitySharp";
const useStyle = makeStyles((theme: Theme) => ({
  mainContainer: {
    // color: "#ccd6f6",
    // color: "#8892b0",

    maxWidth: "1000px",
    margin: "0px auto",
    padding: "100px 0 50px 0",
    height: "100%",
    "& h2": {
      color: "#ccd6f6",
      textAlign: "center",
      fontSize: "2em",
    },
    "& h4": {
      textAlign: "center",
      color: "#8892b0",
      lineHeight: "3em",
      fontSize: "1.5em",
    },
  },
  mainInputContainer: {},
  nameEmailInputContainer: {
    marginTop: "30px",
    marginBottom: "40px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  textField: {
    width: "40%",
    "& label": {
      fontSize: "1.2em",
      color: `#ccd6f6`,
    },
    "& .MuiInputBase-input": {
      color: "#8892b0", // change the text color here
      fontSize: "1.4em",
      height: "30px",
    },
    "& label.Mui-focused": {
      color: `${DefaultThemes.colors.blueBolt}`,
      fontSize: "1.2em",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#8892b0",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: `${DefaultThemes.colors.blueBolt}`,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: `${DefaultThemes.colors.blueBolt}`,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "red",
      },
    },
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "2rem",
    "& button": {
      width: "20%",
    },
  },
  contactContainer: {
    color: "#8892b0",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    marginTop: "5rem",
    "& div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px 0",
      "& p": {
        marginLeft: "10px",
      },
    },
  },
}));
const Contact = () => {
  const classes = useStyle();
  return (
    <Box className={classes.mainContainer}>
      <GeneralHeader heading={"Contact"} />
      <Box sx={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2>Send me a message!</h2>
        <h4>Got a question or proposal, or just want to say hola? Go ahead.</h4>
        <Box className={classes.nameEmailInputContainer}>
          <TextField
            className={classes.textField}
            size="medium"
            label="Your Name"
            variant="standard"
          />
          <TextField
            className={classes.textField}
            label="Email Address"
            variant="standard"
          />
        </Box>
        <TextField
          fullWidth
          multiline
          rows={5} // set the number of rows here
          className={classes.textField}
          label="Your Message"
          variant="standard"
        />
        <Box className={classes.btnContainer}>
          <Button size="large" variant="outlined" startIcon={<SendSharpIcon />}>
            shoot
          </Button>
        </Box>
        <Box className={classes.contactContainer}>
          <Box>
            <LocalPhoneSharpIcon
              sx={{ color: `${DefaultThemes.colors.blueBolt}` }}
            />
            <p>+995 574 00 04 03</p>
          </Box>
          <Box>
            <SendSharpIcon sx={{ color: `${DefaultThemes.colors.blueBolt}` }} />
            <p>levanimakharei7li@gmail.com</p>
          </Box>
          <Box>
            <LocationCitySharpIcon
              sx={{ color: `${DefaultThemes.colors.blueBolt}` }}
            />
            <p>Tbilisi,Georgia</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Contact;
