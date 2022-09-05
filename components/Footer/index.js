import { Text, Box, Flex } from "@chakra-ui/react";
import IndianFlag from "../icons/IndiaFlag";

const Footer = () => {
  return (
    <Flex
      as={"footer"}
      h={"10vh"}
      borderTop={"2px"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      fontSize={"sm"}
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
          <Box as={"span"}>&#169;</Box> Hemanth Kumar, 2022 All Rights Reserved
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
