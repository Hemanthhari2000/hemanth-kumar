import { Box, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import WorkCard from "../../components/WorkCard";
import { workData } from "../../lib/workData";

const Works = ({ works }) => {
  return (
    <>
      <Box as={"section"} mb={"50px"}>
        <Flex
          h={20}
          alignItems={"center"}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <Text as={"h1"} fontSize={"25px"} fontWeight={"bold"}>
            Works
          </Text>
        </Flex>
        <Wrap spacing={5} justify={{ base: "center" }}>
          {works.map((work) => (
            <WrapItem key={work["title"]}>
              <WorkCard work={work} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </>
  );
};

export const getStaticProps = async () => {
  const works = workData;
  return {
    props: {
      works,
    },
  };
};

export default Works;
