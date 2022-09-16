import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";

import mailgo from "mailgo";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    mailgo();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
