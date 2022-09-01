import { Box, Text } from "@chakra-ui/react";

const Introduction = (props) => {
  const { title, subtitle } = props;
  return (
    <Box as={"div"} maxW={400}>
      <Text as={"p"} pl={1} letterSpacing={"wider"}>
        Hi{" "}
        <Text as={"span"} fontWeight={"bold"} color={"teal"}>
          @all
        </Text>
        &#44; I&#8217;am
      </Text>
      <Text as={"h1"} fontSize={"5xl"} fontWeight={"bold"}>
        {title}
      </Text>
      <Text
        as={"p"}
        fontSize={"lg"}
        fontWeight={"semibold"}
        letterSpacing={"wide"}
      >
        {subtitle}
      </Text>
    </Box>
  );
};

export default Introduction;
