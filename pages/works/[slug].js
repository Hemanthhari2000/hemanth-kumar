import { Badge, Box, Flex, Image, Link, Wrap } from "@chakra-ui/react";

import FiExternalLink from "../../components/icons/FiExternalLink";
import WorkDetailsDescription from "../../components/WorkDetails/workDetailsDescription";
import WorkDetailHeader from "../../components/WorkDetails/workDetailsHeader";
import WorkDetailSubHeader from "../../components/WorkDetails/workDetailsSubHeader";

import { workData } from "../../lib/workData";

const WorkDetails = ({ work }) => {
  let isImg = true;
  if (work.URL) {
    const urlFormat = work.URL.split(".").at(-1);
    isImg = ["png", "jpg", "jpeg"].includes(urlFormat);
  }
  return (
    <>
      <WorkDetailHeader projectName={work.title} />
      <Flex
        as={"section"}
        mb={"30px"}
        w={"100%"}
        alignItems={"center"}
        direction={"column"}
      >
        <Box maxW={"640px"} maxH={"360px"} rounded={"md"} overflow="hidden">
          {isImg ? (
            <Image
              src={work.URL}
              fallbackSrc="https://via.placeholder.com/1920x1080"
              alt={work.title}
              layout={"fill"}
            />
          ) : (
            <video autoPlay muted loop type="video/mp4" src={work.URL} />
          )}
        </Box>
        <Flex
          w={"100%"}
          justifyContent={"flex-start"}
          mt={5}
          direction={"column"}
        >
          <WorkDetailsDescription description={work.fullDescription} />
          <Box mt={5}>
            <WorkDetailSubHeader title={"Tech Stack"} mb={2} />
            <Wrap spacing={2}>
              {work.techStack.map((tech) => (
                <Badge key={tech} ariant="solid" colorScheme="orange">
                  {tech}
                </Badge>
              ))}
            </Wrap>
          </Box>
          <Box mt={5}>
            <Flex>
              <Link href={work.source} isExternal>
                <Flex alignItems={"center"}>
                  <WorkDetailSubHeader title={"Source Code"} />
                  <Box as={"span"} ml={2}>
                    <FiExternalLink />
                  </Box>
                </Flex>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default WorkDetails;

export const getStaticPaths = async () => {
  const paths = workData.map((work) => {
    return {
      params: { slug: work.slug },
    };
  });
  return {
    paths: [...paths],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const data = workData.filter((work) => work.slug === slug);

  return {
    props: { work: data[0] },
  };
};
