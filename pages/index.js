import { Box, Flex } from "@chakra-ui/react";
import About from "../components/About";
import CharacterModel from "../components/CharacterModel";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <PageTransition>
      <Box as={"section"} h={"90vh"}>
        <Flex
          h={"100%"}
          direction={{ base: "column-reverse", md: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box w={{ base: "full", md: "474px" }} h={"400px"} flex={{ base: 2 }}>
            <Flex
              h={"100%"}
              w={"100%"}
              alignItems={{ base: "flex-start", md: "center" }}
              justifyContent={"center"}
            >
              <Introduction
                title={"Hemanth Kumar"}
                subtitle={
                  "and I'am an Application Developer & AI/ML Researcher based in India"
                }
              />
            </Flex>
          </Box>
          <Box
            w={{ base: "full", md: "550px" }}
            h={{ base: "full", md: "550px" }}
            flex={{ base: 3 }}
          >
            <CharacterModel />
          </Box>
        </Flex>
      </Box>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 1.4 }}
      >
        <Box as={"section"} height={"70vh"} my={3}>
          <About />
        </Box>
      </motion.div>
      <Footer />
    </PageTransition>
  );
}
