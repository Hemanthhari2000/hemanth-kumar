import { Text, useColorModeValue } from "@chakra-ui/react";

const WorkDetailSubHeader = (props) => {
  const { title } = props;
  return (
    <Text
      as={"h2"}
      fontWeight={"bold"}
      fontSize={"20px"}
      color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
      {...props}
    >
      {title}
    </Text>
  );
};

export default WorkDetailSubHeader;
