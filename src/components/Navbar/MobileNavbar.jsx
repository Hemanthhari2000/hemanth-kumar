import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { Links } from "./Links";
import NavLinks from "./NavLinks";

const MobileNavbar = ({useColorModeValue}) => {
  return (
    <Box
      pb={4}
      display={{ base: "flex", md: "none" }}
      px={10}
      justifyContent={"center"}
      textAlign={"center"}
      pt={4}
    >
      <Stack as={"nav"} spacing={6}>
        {Links.map((link) => (
          <NavLinks
            key={link.name}
            path={link.path}
            useColorModeValue={useColorModeValue}
          >
            {link.name}
          </NavLinks>
        ))}
      </Stack>
    </Box>
  );
};

export default MobileNavbar;
