import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

const PostCard = ({ post }) => {
  let translateOnHover = useBreakpointValue({
    base: "none",
    md: "translate(0, -8px)",
  });

  return (
    <Link
      href={post.source}
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
          <Image
            src={post.URL}
            fallbackSrc="https://via.placeholder.com/1920x1080"
            alt="post"
            layout={"fill"}
          />
        </Box>
        <Box w={"100%"} textAlign={"center"} fontSize={"14px"}>
          <Flex w={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Text as={"h1"} py={2} fontSize={"16px"} fontWeight={"bold"}>
              {post.title}
            </Text>
          </Flex>
          <Text
            as={"p"}
            p={2}
            fontWeight={"semibold"}
            color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
          >
            {post.description}
          </Text>
          <Text
            fontWeight={"semibold"}
            fontSize={"14px"}
            color={useColorModeValue("gray.400", "whiteAlpha.500")}
            data-testid={"published_and_read_time"}
          >
            {post.readTime} min | {post.published}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default PostCard;
