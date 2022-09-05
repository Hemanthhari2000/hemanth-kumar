import { Container, Box } from "@chakra-ui/react";
import Footer from "../Footer";

import Navbar from "../Navbar";

const Layout = ({ children, router }) => {
  return (
    <>
      <Navbar path={router.asPath} />
      <Container maxW={"container.lg"} pt={16}>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
