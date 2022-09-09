import { Wrap, WrapItem } from "@chakra-ui/react";
import CardLayout from "../../components/Layout/Card/cardLayout";
import CardTitleLayout from "../../components/Layout/Card/cardTitleLayout";
import WorkCard from "../../components/Cards/workCard";
import { workData } from "../../lib/data/workData";

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
