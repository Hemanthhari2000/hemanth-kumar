import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Logo = () => {
  return (
    <Flex align={"center"}>
      <Heading as={"h1"} letterSpacing={"tight"}>
        <Link href={"/"}>
          <a>
            <Text
              fontFamily={"Pacifico"}
              fontWeight={"medium"}
              fontSize={"23"}
              lineHeight={"35px"}
              alignItems={"center"}
            >
              Hemanth Kumar
            </Text>
          </a>
        </Link>
      </Heading>
    </Flex>
  );
};
export default Logo;
