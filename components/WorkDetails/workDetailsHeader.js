import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";

import FiChevronRight from "../icons/FiChevronRight";

const WorkDetailHeader = (props) => {
  const { projectName } = props;
  return (
    <Flex h={20} alignItems={"center"}>
      <Text as={"h1"} fontSize={"25px"} fontWeight={"bold"}>
        <Flex alignItems={"center"}>
          <Link
            href={"/works/"}
            textDecoration={"underline"}
            _hover={{
              color: "teal.400",
            }}
          >
            Works
          </Link>
          <Box as={"span"} px={2}>
            <FiChevronRight />
          </Box>
          <Text
            as={"h1"}
            color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
          >
            {projectName}
          </Text>
        </Flex>
      </Text>
    </Flex>
  );
};

export default WorkDetailHeader;
