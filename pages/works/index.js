import { Wrap, WrapItem } from "@chakra-ui/react";
import CardLayout from "../../components/Layout/CardLayout";
import CardTitleLayout from "../../components/Layout/cardTitleLayout";
import WorkCard from "../../components/WorkCard";
import { workData } from "../../lib/workData";

const Works = ({ works }) => {
  return (
    <>
      <CardLayout>
        <CardTitleLayout title={"Works"} />
        <Wrap spacing={5} justify={{ base: "center" }}>
          {works.map((work) => (
            <WrapItem key={work["title"]}>
              <WorkCard work={work} />
            </WrapItem>
          ))}
        </Wrap>
      </CardLayout>
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
