import {
  Box,
  Container,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "./logo";
import NavbarLinks, { MobileNavBar } from "./navbarLinks";
import FiSun from "../icons/FiSun";
import FiMoon from "../icons/FiMoon";
import FiX from "../icons/FiX";
import FiMenu from "../icons/FiMenu";

const Navbar = ({ path }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      as="nav"
      data-testid={"navbar"}
      position={"fixed"}
      w={"100%"}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Container
        display={"flex"}
        maxW={"container.lg"}
        py={3}
        align={"center"}
        justifyContent={{ base: "space-between" }}
      >
        <Box flex={1} align="left">
          <Logo />
        </Box>
        <NavbarLinks path={path} testid={"navlink"} />
        <Box>
          <HStack>
            <IconButton
              data-testid="color_mode_toggle"
              icon={useColorModeValue(<FiMoon />, <FiSun />)}
              size={"md"}
              colorScheme={colorMode === "light" ? "purple" : "yellow"}
              onClick={toggleColorMode}
            />
            <Box as={"div"} display={{ md: "none" }}>
              <IconButton
                icon={isOpen ? <FiX /> : <FiMenu />}
                size={"md"}
                variant={"outline"}
                aria-label={"Toggle Navigation"}
                onClick={isOpen ? onClose : onOpen}
              />
            </Box>
          </HStack>
        </Box>
      </Container>
      {isOpen ? <MobileNavBar /> : null}
    </Box>
  );
};

export default Navbar;
