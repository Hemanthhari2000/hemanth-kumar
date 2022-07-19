import { Link } from "@chakra-ui/react";
import React from "react";

const NavLinks = ({ children, path, useColorModeValue }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    fontSize="lg"
    _hover={{
      textDecoration: "none",
      color: useColorModeValue("gray.400", "gray.500"),
    }}
    href={path}
  >
    {children}
  </Link>
);

export default NavLinks;
