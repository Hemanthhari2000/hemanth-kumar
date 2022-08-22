import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";
import Layout from "../components/Layout";
import theme from "../lib/theme";

function MyApp({ Component, pageProps, router }) {
  // console.log(router);
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
