import { Box, Button, Link, Text } from "@chakra-ui/react";
import FiChevronRight from "../icons/FiChevronRight";

const Introduction = (props) => {
  const { title, subtitle } = props;
  return (
    <Box as={"div"} maxW={400} textAlign={{ base: "center", md: "start" }}>
      <Text as={"p"} pl={1} letterSpacing={"wider"}>
        Hi{" "}
        <Text as={"span"} fontWeight={"bold"} color={"teal"}>
          @all
        </Text>
        &#44; I&#8217;am
      </Text>
      <Text as={"h1"} fontSize={{ base: "4xl", md: "5xl" }} fontWeight={"bold"}>
        {title}
      </Text>
      <Text
        as={"p"}
        fontSize={{ base: "md", md: "lg" }}
        fontWeight={"semibold"}
        letterSpacing={"wide"}
      >
        {subtitle}
      </Text>
      <Link href={"/works/"} _hover={{ textDecoration: "none" }}>
        <Button
          mt={4}
          colorScheme={"teal"}
          rightIcon={<FiChevronRight />}
          fontSize={"16px"}
          fontWeight={"bold"}
        >
          My Portfolio
        </Button>
      </Link>
    </Box>
  );
};

export default Introduction;
