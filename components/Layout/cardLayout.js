import { Box } from "@chakra-ui/react";

const CardLayout = ({ children }) => {
  return (
    <Box as={"section"} mb={"50px"}>
      {children}
    </Box>
  );
};

export default CardLayout;
