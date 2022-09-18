import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import IndianFlag from "../icons/IndiaFlag";

const Footer = () => {
  const fontColor = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  return (
    <Container maxW={"container.lg"}>
      <Flex
        as={"footer"}
        h={"10vh"}
        borderTop={"2px"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={"sm"}
        color={fontColor}
        fontWeight={"semibold"}
      >
        <Flex alignItems={"center"}>
          <Text>Proudly made in </Text>
          <Box as={"span"} px={1.5}>
            <IndianFlag />
          </Box>
          <Text>By Hemanth Kumar</Text>
        </Flex>
        <Flex>
          <Text>
            <Box as={"span"}>&#169;</Box> Hemanth Kumar, 2022 All Rights
            Reserved
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Footer;
