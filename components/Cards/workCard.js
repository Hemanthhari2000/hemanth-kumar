import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

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
  let workHref = `/works/${work.slug}`;
  return (
    <>
      <NextLink href={workHref} passHref>
        <Link
          as={'a'}
          overflow={"hidden"}
          _hover={{
            textDecoration: "none",
          }}
        >
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
                  {work["title"]}
                </Text>
              </Flex>
              <Text
                as={"p"}
                p={2}
                fontWeight={"semibold"}
                color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
              >
                {work["oneLineDescription"]}
              </Text>
            </Box>
          </Box>
        </Link >
      </NextLink>
    </>
  );
};

export default WorkCard;
