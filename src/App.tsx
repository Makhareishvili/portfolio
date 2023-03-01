import { Box, ThemeProvider } from "@mui/material";
import ApplicationContainer from "./containers/ApplicationContainer";
import { Theme } from "./Themes/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ backgroundColor: Theme.colors.background }}>
        <ApplicationContainer />
      </Box>
    </ThemeProvider>
  );
}
export default App;
