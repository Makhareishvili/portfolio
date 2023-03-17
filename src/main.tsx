import { ThemeProvider } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import { About } from "./components/Components";
import ApplicationContainer from "./containers/ApplicationContainer";
import "./index.css";
import { DefaultThemes } from "./Themes/DefaultThemes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultThemes}>
      <ApplicationContainer />
    </ThemeProvider>
  </React.StrictMode>
);
