import { Text, Flex, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Flex direction={"column"} h={"100%"}>
        <Flex
          flex={1}
          h={"100%"}
          alignItems={"center"}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <Text as={"h1"} fontSize={"4xl"} fontWeight={"bold"}>
            About
          </Text>
        </Flex>
        <Flex
          flex={9}
          direction={{ base: "column", md: "row" }}
          //  bg={"red"}
        >
          <Flex
            h={{ md: "100%" }}
            minW={{ md: "250px" }}
            alignItems={"center"}
            justifyContent={"center"}
            mt={{ base: 4, md: 0 }}
            // bg={"blue"}
          >
            <Image
              fallbackSrc="https://via.placeholder.com/200"
              width={"200px"}
              height={"200px"}
              borderRadius={"100px"}
            />
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Text
              as={"p"}
              fontSize={"xl"}
              fontWeight={"light"}
              pt={{ base: "10px", md: "0px" }}
            >
              Do minim est est veniam sit id est officia ea mollit dolore
              voluptate. Nostrud mollit amet non quis amet. Qui labore minim
              consectetur pariatur aliquip commodo eu eiusmod aliqua.
              <br />
              <br />
              Officia ullamco sit eu sit nulla minim fugiat aute. Duis mollit
              irure nulla ipsum. Tempor sunt in in magna enim non laboris
              deserunt. Deserunt elit laboris sit sunt exercitation ea
              reprehenderit minim consequat dolore voluptate consequat in
              exercitation. Magna sunt labore officia Lorem irure velit deserunt
              Lorem eiusmod labore nisi anim nisi anim. Veniam sit fugiat amet
              incididunt nisi. Eu incididunt commodo sunt enim laboris voluptate
              mollit cillum esse amet adipisicing tempor veniam.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
