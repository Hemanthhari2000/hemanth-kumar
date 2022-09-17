import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { ContactForm } from "./ContactForm";

const SayHello = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const cancelRef = useRef();

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
            src={"/images/profile_image.png"}
            fallbackSrc="https://via.placeholder.com/50"
            alt={"profile_pic"}
            width={"80px"}
            height={"80px"}
            borderRadius={"50%"}
            objectFit={"cover"}
            mb={2}
          />
          <Text fontSize={"12px"} mb={2} color="whiteAlpha.800">
            Wanna Connect?
          </Text>
          <Button
            _hover={{ textDecoration: "none" }}
            onClick={onOpen}
            variant={"outline"}
            isLoading={false}
            colorScheme={"teal"}
            fontSize={"12px"}
          >
            Say Hello &#128075;
          </Button>
        </Flex>
      </Box>
      <ContactForm cancelRef={cancelRef} onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

export default SayHello;
