import { Box, Stack, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const LinkItem = ({ href, path, target, children, ...props }) => {
  path = path || "";
  const active = path === href;
  return (
    <NextLink href={href} passHref>
      <Link
        as={"a"}
        target={target}
        p={2}
        bg={props.ismobile ? undefined : active ? "teal.400" : undefined}
        borderRadius={"md"}
        fontWeight={"semibold"}
        _hover={{ bg: "teal.500" }}
        mx={1}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const NavbarLinks = ({ path, testid }) => {
  return (
    <>
      <Box display={{ base: "none", md: "flex" }} align={"center"} flex={3}>
        <LinkItem href={"/works"} path={path} data-testid={testid}>
          Works
        </LinkItem>
        <LinkItem href={"/posts"} path={path} data-testid={testid}>
          Posts
        </LinkItem>
        <LinkItem href={"/connect"} path={path} data-testid={testid}>
          Connect
        </LinkItem>
      </Box>
    </>
  );
};

const MobileNavBar = ({ onClose }) => {
  return (
    <Box
      pd={4}
      display={{ base: "flex", md: "none" }}
      px={10}
      justifyContent={"center"}
      textAlign={"center"}
      alignItems={"center"}
      py={4}
    >
      <Stack as={"nav"} spacing={6} onClick={onClose}>
        <LinkItem href={"/works"} ismobile={"true"}>
          Works
        </LinkItem>
        <LinkItem href={"/posts"} ismobile={"true"}>
          Posts
        </LinkItem>
        <LinkItem href={"/connect"} ismobile={"true"}>
          Connect
        </LinkItem>
      </Stack>
    </Box>
  );
};

export default NavbarLinks;
export { MobileNavBar };
