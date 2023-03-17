import emailjs from "@emailjs/browser";
import { Box, Button, TextField, Theme } from "@mui/material";
import { DefaultThemes } from "../../Themes/DefaultThemes";
import GeneralHeader from "../GenerealHEader/GeneralHeader";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import LocationCitySharpIcon from "@mui/icons-material/LocationCitySharp";
import { useRef, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { keyframes, styled } from "@mui/system";
const displayLoad = keyframes({
  "0%": {
    transform: "translateY(-110%)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});
const MainContainer = styled("div")({
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
    fontSize: "1.2em",
  },
});
const MainInputContainer = styled("div")(({ theme }) => ({
  maxWidth: "800px",
  margin: "0 auto",
  padding: "80px",
  borderRadius: "20px",
  boxShadow: "rgba(49, 88, 179, 0.2) 0px 7px 29px 0px",
  [theme.breakpoints.down("laptop")]: {
    padding: "40px",
    h2: {
      fontSize: "20px",
    },
    h4: {
      fontSize: "16px",
    },
  },
  [theme.breakpoints.down("laptop")]: {
    padding: "20px",
    h2: {
      fontSize: "18px",
    },
    h4: {
      fontSize: "10px",
      lineHeight: "1.6em",
    },
  },
  [theme.breakpoints.down("tablet")]: {
    "& h4": {
      marginTop: "10px",
    },
  },
}));
const NameEmailInputContainer = styled("div")({
  marginTop: "30px",
  marginBottom: "40px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
});
const TextFieldInput = styled(TextField)(({ theme }) => ({
  width: "40%",
  "& label": {
    fontSize: "1.6em",
    color: `#ccd6f6`,
    [theme.breakpoints.down("laptop")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.down("tablet")]: {
      fontSize: ".8em",
    },
  },
  "& .MuiInputBase-input": {
    color: "#8892b0", // change the text color here
    fontSize: "1.6em",
    height: "30px",
    [theme.breakpoints.down("laptop")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.down("tablet")]: {
      fontSize: ".8em",
    },
  },
  "& label.Mui-focused": {
    color: `${DefaultThemes.colors.blueBolt}`,
    [theme.breakpoints.down("laptop")]: {
      fontSize: "1em",
    },
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
}));
const BtnContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "2rem",
  [theme.breakpoints.down("tablet")]: {
    "& button": {
      width: "30%",
      fontSize: "10px",
    },
    "& svg": {
      height: "16px",
    },
  },
}));
const ContactContainer = styled("div")(({ theme }) => ({
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
      letterSpacing: ".1em",
      [theme.breakpoints.down("laptop")]: {
        fontSize: ".8em",
      },
      [theme.breakpoints.down("tablet")]: {
        fontSize: ".6em",
      },
    },
    "& svg": {
      color: `${DefaultThemes.colors.blueBolt}`,
      [theme.breakpoints.down("laptop")]: {
        fontSize: "1em",
      },
      [theme.breakpoints.down("tablet")]: {
        fontSize: ".8em",
      },
    },
  },
  [theme.breakpoints.down("tablet")]: {
    marginTop: "30px",
  },
}));
const DisplayMessageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: `#8892b0`,
  background: "#1e1f22",
  width: "20%",
  height: "200px",
  position: "fixed",
  borderRadius: "10px",
  top: 10,
  left: "40%",
  zIndex: 4,
  // animation
  animationDuration: "300ms",
  animationTimingFunction: "ease-in",
  animationFillMode: "forwards",
  transform: "scale(0)",
  // animationDelay: "100ms",
  animationName: `${displayLoad}`,
  "& svg": {
    color: "green",
    fontSize: "3em",
    marginTop: "20px",
  },
  "& h2": { lineHeight: "2em" },
  [theme.breakpoints.down("tv")]: {
    width: "30%",
    left: "40%",
  },
  [theme.breakpoints.down("laptop")]: {
    width: "40%",
    left: "30%",
  },
  [theme.breakpoints.down("tablet")]: {
    width: "60%",
    left: "20%",
    height: "100px",
    "& svg": {
      fontSize: "1.5em",
    },
    "& h2": { lineHeight: "2em", fontSize: "10px" },
    "& p": { lineHeight: "1em", fontSize: "10px" },
  },
}));
const Contact = () => {
  const [disable, setDisable] = useState(false);
  const [displayVisible, setDisplayVisible] = useState(false);
  const form = useRef<any>();
  const sendEmail = (e: any) => {
    setDisable(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ki54oti",
        "template_x5manfo",
        form.current,
        "NcQ8ACTHeTBRKO5wg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDisable(false);
          handleDisplayVisible();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const GetFields = () => {
    return (
      <>
        <form ref={form} onSubmit={sendEmail}>
          <NameEmailInputContainer>
            <TextFieldInput
              size="medium"
              label="Your Name"
              variant="standard"
              type="text"
              name="user_name"
              required
            />
            <TextFieldInput
              label="Email Address"
              variant="standard"
              type="email"
              name="user_email"
              required
            />
          </NameEmailInputContainer>
          <TextFieldInput
            multiline
            rows={5} // set the number of rows here
            label="Your Message"
            variant="standard"
            name="message"
            required
            sx={{ width: "100%" }}
          />
          <BtnContainer>
            <Button
              size="large"
              variant="outlined"
              type="submit"
              value="Send"
              endIcon={<SendSharpIcon />}
              disabled={disable}
            >
              shoot
            </Button>
          </BtnContainer>
        </form>
      </>
    );
  };
  const handleDisplayVisible = () => {
    setDisplayVisible(true);
    setTimeout(() => {
      setDisplayVisible(false);
    }, 3000);
  };
  return (
    <>
      <MainContainer id="contact">
        <GeneralHeader heading={"Contact"} />
        <MainInputContainer>
          <h2>Send me a message!</h2>
          <h4>
            Got a question or proposal, or just want to say hola? Go ahead.
          </h4>
          <GetFields />
          <ContactContainer>
            <Box>
              <LocalPhoneSharpIcon />
              <p>+995 574 00 04 03</p>
            </Box>
            <Box>
              <SendSharpIcon sx={{ rotate: "-45deg" }} />
              <p>levanimakharei7li@gmail.com</p>
            </Box>
            <Box>
              <LocationCitySharpIcon />
              <p>Tbilisi,Georgia</p>
            </Box>
          </ContactContainer>
        </MainInputContainer>
      </MainContainer>
      {displayVisible && (
        <DisplayMessageContainer>
          <CheckCircleOutlineIcon sx={{ color: "green" }} />
          <h2>Thank you!</h2>
          <p>Message successfully sent.</p>
        </DisplayMessageContainer>
      )}
    </>
  );
};
export default Contact;
