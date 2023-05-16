import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/gideon-roman";
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// extend the theme
const fonts = {
  body: "GFS Neohellenic, sans-serif",
  heading: '"Gideon Roman", GFS Neohellenic, sans-serif',
};

const colors = {
  100: "#CEA884ff", //tan
  200: "#C6803Cff", //caramel
  300: "#B97039ff", //copper
  400: "#8A6543ff", //raw-umber
  500: "#17190Dff", //eerie-black
};

const theme = extendTheme({ fonts, colors });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
