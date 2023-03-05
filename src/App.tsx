import { Box, ThemeProvider } from "@mui/material";
import ApplicationContainer from "./containers/ApplicationContainer";
import { DefaultThemes } from "./Themes/DefaultThemes";

function App() {
  return (
    <ThemeProvider theme={DefaultThemes}>
      <Box sx={{ backgroundColor: DefaultThemes.colors.background }}>
        <ApplicationContainer />
      </Box>
    </ThemeProvider>
  );
}
export default App;
