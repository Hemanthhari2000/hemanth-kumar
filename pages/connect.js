import { Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import CardTitleLayout from "../components/Layout/Card/cardTitleLayout";
import ConnectLinks from "../components/Connect/ConnectLink";
import CardLayout from "../components/Layout/Card/cardLayout";
import PageTransition from "../components/PageTransition";
import SayHello from "../components/SayHello";

const Connect = () => {
  const widthConstraints = { base: "full", md: "50%" };
  return (
    <>
      <PageTransition>
        <CardLayout>
          <CardTitleLayout title={"Connect"} />
          <Flex w={"100%"} h={"75vh"} direction={{ base: "column", md: "row" }}>
            <Flex
              w={widthConstraints}
              flex={{ base: 2, md: 5 }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <SayHello />
            </Flex>
            <Flex
              w={widthConstraints}
              flex={{ base: 1, md: 4 }}
              direction={"column"}
            >
              <Flex
                w={"100%"}
                h={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <ConnectLinks />
              </Flex>
            </Flex>
          </Flex>
        </CardLayout>
        <Footer />
      </PageTransition>
    </>
  );
};

export default Connect;
