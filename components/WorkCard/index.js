import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

const WorkCard = ({ work }) => {
  let translateOnHover = useBreakpointValue({
    base: "none",
    md: "translate(0, -8px)",
  });

  let isImage = true;
  if (work["URL"]) {
    const urlFormat = work["URL"].split(".").at(-1);
    isImage = ["png", "jpg", "jpeg"].includes(urlFormat);
  }

  return (
    <>
      <Box
        w={"300px"}
        mt={3}
        cursor={"pointer"}
        overflow={"hidden"}
        _hover={{
          transform: translateOnHover,
          transition: "0.8s",
          transitionTimingFunction: "ease-out",
        }}
      >
        <Box rounded={"xl"} overflow={"hidden"}>
          {isImage ? (
            <Image
              src={work["URL"]}
              fallbackSrc="https://via.placeholder.com/1920x1080"
              alt="work"
              layout={"fill"}
            />
          ) : (
            <video autoPlay muted loop type="video/mp4" src={work["URL"]} />
          )}
        </Box>
        <Box w={"100%"} textAlign={"center"} fontSize={"14px"}>
          <Flex w={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Text as={"h1"} py={2} fontSize={"16px"} fontWeight={"bold"}>
              {/* Portfolio Website */}
              {work["title"]}
            </Text>
          </Flex>
          <Text as={"p"} p={2}>
            {/* Sint dolore eu consequat adipisicing sunt mollit enim esse
            consectetur.consequat adipisicing sunt mollit enim esse consectetur. */}
            {work["description"]}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default WorkCard;
