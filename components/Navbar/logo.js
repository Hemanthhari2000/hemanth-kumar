import { Flex, Heading, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";

const LogoWrapper = styled.span`
  display: inline-flex;
  font-size: 23px;
  font-weight: bold;
  align-items: center;
  height: 30px;
`;

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
