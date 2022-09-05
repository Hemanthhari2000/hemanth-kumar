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
        <Flex flex={9} direction={{ base: "column", md: "row" }}>
          <Flex
            h={{ md: "100%" }}
            minW={{ md: "250px" }}
            alignItems={"center"}
            justifyContent={"center"}
            mt={{ base: 4, md: 0 }}
          >
            <Image
              fallbackSrc="https://via.placeholder.com/200"
              alt="profile-picture"
              width={"200px"}
              height={"200px"}
              borderRadius={"100px"}
            />
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Text
              data-testid={"about-content"}
              as={"p"}
              fontSize={{ base: "md", md: "lg" }}
              fontWeight={"light"}
              pt={{ base: "15px", md: "0px" }}
              textAlign={{ base: "center", md: "start" }}
            >
              Hi, I&#8217;m an Energetic Computer Scientist with a strong
              foundation in math, programming logic, and cross-platform coding.
              Seeking to leverage solid development skills with a focus on
              collaboration, communication, passion, and creativity as a
              programmer.
              <br />
              <br />
              I&#8217;m Currently working as an Application Developer at
              Thoughtworks. I love to innovate with technology, especially with
              AI. I also love 3d and building 3d websites [
              <b>
                <i> just like this one :) </i>
              </b>
              ]
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
