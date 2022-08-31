import { Container } from "@chakra-ui/react";

import Navbar from "../Navbar";

const Layout = ({ children, router }) => {
  return (
    <>
      <Navbar path={router.asPath} />
      <Container maxW={"container.lg"} pt={16}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
