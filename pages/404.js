import { Box, Flex, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";

import PageTransition from "../components/PageTransition";

const ErrorPage = () => {
  return (
    <PageTransition>
      <Box as={"section"} h={"80vh"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
        >
          <Box data-testid={"404_video"}>
            <video autoPlay muted loop>
              <source src="/videos/404.webm" type="video/webm" />
            </video>
          </Box>
          <Box>
            <Text fontSize={"24px"} fontWeight={"semibold"}>
              Are you lost?
            </Text>
            <NextLink href="/" passHref scroll={false}>
              <Button
                _hover={{ textDecoration: "none" }}
                mt={4}
                colorScheme={"teal"}
                fontSize={"16px"}
                fontWeight={"bold"}
              >
                Let&#8217;s go Home
              </Button>
            </NextLink>
          </Box>
        </Flex>
      </Box>
    </PageTransition>
  );
};

export default ErrorPage;
