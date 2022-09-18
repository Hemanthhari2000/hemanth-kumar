import { Container } from "@chakra-ui/react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import PageTransition from "../PageTransition";

const Layout = ({ children, router }) => {
  return (
    <>
      <Navbar path={router.asPath} />
      <Container maxW={"container.lg"} pt={16}>
        {children}
      </Container>
      <PageTransition delay={0.3}>
        <Footer />
      </PageTransition>
    </>
  );
};

export default Layout;
