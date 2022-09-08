import { Text, useColorModeValue } from "@chakra-ui/react";

const WorkDetailsDescription = (props) => {
  const { description } = props;
  return (
    <Text
      as={"p"}
      fontSize={{ base: "14px", md: "16px" }}
      fontWeight={"semibold"}
      color={useColorModeValue("gray.600", "whiteAlpha.700")}
    >
      {description}
    </Text>
  );
};

export default WorkDetailsDescription;
