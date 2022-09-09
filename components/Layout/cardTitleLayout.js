import { Flex, Text } from "@chakra-ui/react";

const CardTitleLayout = ({ title }) => {
  return (
    <Flex
      h={20}
      alignItems={"center"}
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      <Text as={"h1"} fontSize={"25px"} fontWeight={"bold"}>
        {title}
      </Text>
    </Flex>
  );
};

export default CardTitleLayout;
