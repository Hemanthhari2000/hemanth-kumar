import {
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Box,
  Flex,
  Text,
  HStack,
  Stack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { Links } from "./Links";
import MobileNavbar from "./MobileNavbar";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} bg={useColorModeValue("gray.100", "gray.900")}>
        <Flex
          px={{ base: 2, md: 10 }}
          h={16}
          alignItems={"center"}
          justifyContent={{ base: "space-between", md: "start" }}
        >
          <HStack cursor={"pointer"}>
            <Image w={10} src={"/logo.png"} alt={"logo"} />
            <Text fontSize={{ base: "md", md: "xl" }}>Hemanth Kumar</Text>
          </HStack>
          <Box alignItems={"center"} w={{ base: "0", md: "38%" }}>
            <Flex
              justifyContent={{ base: "end", md: "start" }}
              alignItems={"center"}
            >
              <HStack
                w={"100%"}
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                justifyContent={"space-evenly"}
                ml={10}
              >
                {Links.map((link) => (
                  <NavLinks
                    key={link.name}
                    path={link.path}
                    useColorModeValue={useColorModeValue}
                  >
                    {link.name}
                  </NavLinks>
                ))}
              </HStack>
            </Flex>
          </Box>
          <HStack>
            <Box ml={70}>
              <IconButton
                icon={useColorModeValue(<FiMoon />, <FiSun />)}
                onClick={toggleColorMode}
                // variant={"outline"}
                colorScheme={colorMode === "light" ? "purple" : "yellow"}
              />
            </Box>
            <Box display={{ md: "none" }}>
              <IconButton
                size={"md"}
                variant={"outline"}
                aria-label={"Toggle Navigation"}
                icon={isOpen ? <FiX /> : <FiMenu />}
                onClick={isOpen ? onClose : onOpen}
              />
            </Box>
          </HStack>
        </Flex>
        {isOpen ? <MobileNavbar useColorModeValue={useColorModeValue} /> : null}
      </Box>
    </>
  );
};

export default Navbar;
