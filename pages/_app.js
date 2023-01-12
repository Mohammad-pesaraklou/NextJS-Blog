import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// For fix the hydration issue
import { HydrationProvider, Client } from "react-hydration-provider";
// global styles
import "../styles/globals.css";
// components
import Layout from "../components/Layout";
import "aos/dist/aos.css";
import { createTheme, ThemeProvider } from "@mui/material";
import ThemeContextProvider from "../context/ThemeContextProvider";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/clc392yl62mde01tec19x5nrg/master",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#f59115",
      },
    },
  });

  return (
    <HydrationProvider>
      <Client>
        <ThemeContextProvider>
          <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ApolloProvider>
          </ThemeProvider>
        </ThemeContextProvider>
      </Client>
    </HydrationProvider>
  );
}
