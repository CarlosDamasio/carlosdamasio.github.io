import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@primer/react";
import "./css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import myTheme from "./assets/Themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider
      theme={myTheme}
      colorMode="dark"
      dayScheme="light"
      nightScheme="dark"
      preventSSRMismatch
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
