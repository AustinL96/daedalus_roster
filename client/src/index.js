import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// *** Import Custom Themes
import "@fontsource/gideon-roman";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// *** Client stuff
import { BrowserRouter } from "react-router-dom";
// *** GraphQL imports
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// *** ChakraUI Custom Themes
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

//*** Server stuff */
// process.env.NODE_ENV === "production" ? "https://desolate-wave-03544.herokuapp.com" : "http://localhost:3333"
const httpLink = new HttpLink({
  uri: process.env.NODE_ENV === "production" ? "https://limitless-inlet-40294.herokuapp.com" : ,

  //makes sure it includes all cookies
  credentials: "include",
});

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// Create the client context to be passed down to all child components - <App /> and down
const client = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
