import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

import { mailSettings } from "../../lib/mailSettings";

const SayHello = () => {
  return (
    <Box>
      <Box w={"216px"} h={"435px"} position={"relative"}>
        <Image
          src={"/images/iphone.png"}
          alt={"phone_layout_image"}
          position={"absolute"}
        />
        <Flex
          ml={0.5}
          bg={"#222222"}
          w={"210px"}
          h={"100%"}
          borderRadius={"35px"}
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
        >
          <Image
            src="https://via.placeholder.com/50"
            alt={"profile_pic"}
            width={"80px"}
            height={"80px"}
            borderRadius={"40px"}
            mb={2}
          />
          <Text fontSize={"12px"} mb={2} color="whiteAlpha.800">
            Wanna Connect?
          </Text>
          <Link
            href={"#mailgo"}
            data-address={mailSettings.address}
            data-domain={mailSettings.domain}
            data-subject={mailSettings.subject}
            data-body={mailSettings.body}
            zIndex={2}
            _hover={{ textDecoration: "none" }}
          >
            <Button
              _hover={{ textDecoration: "none" }}
              variant={"outline"}
              isLoading={false}
              colorScheme={"teal"}
              fontSize={"12px"}
            >
              Say Hello &#128075;
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default SayHello;
