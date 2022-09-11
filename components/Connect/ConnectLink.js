import { Flex, Link, Text } from "@chakra-ui/react";
import FiGithub from "../icons/FiGithub";
import FiLinkedin from "../icons/FiLinkedin";
import FiInstagram from "../icons/FiInstagram";
import FiTwitter from "../icons/FiTwitter";
import FiMedium from "../icons/FiMedium";

const ConnectLinks = () => {
  return (
    <>
      <Flex
        h={"250px"}
        direction={"column"}
        justifyContent={"space-evenly"}
        data-testid={"connect_links"}
      >
        <ConnectLink URL={"https://github.com/hemanthhari2000"}>
          <FiGithub /> <Text ml={2}>/hemanthhari2000</Text>
        </ConnectLink>

        <ConnectLink URL={"https://www.linkedin.com/in/hemanthhari2000/"}>
          <FiLinkedin /> <Text ml={2}>/hemanthhari2000</Text>
        </ConnectLink>

        <ConnectLink URL={"https://www.instagram.com/hemi_hydrate/"}>
          <FiInstagram /> <Text ml={2}>/hemi_hydrate</Text>
        </ConnectLink>

        <ConnectLink URL={"https://twitter.com/hemi_hydrate"}>
          <FiTwitter /> <Text ml={2}>/hemi_hydrate</Text>
        </ConnectLink>

        <ConnectLink URL={"https://medium.com/@hemanthhari2000"}>
          <FiMedium /> <Text ml={2}>@hemanthhari2000</Text>
        </ConnectLink>
      </Flex>
    </>
  );
};

const ConnectLink = ({ children, URL }) => (
  <Link href={URL} isExternal>
    <Flex fontSize={{ base: "14px", md: "20px" }} fontWeight={"semibold"} m={1}>
      {children}
    </Flex>
  </Link>
);

export default ConnectLinks;
