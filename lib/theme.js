import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const fonts = {
  heading: "Urbanist, Pacifico, sans-serif",
  body: "Urbanist, Pacifico, sans-serif",
};

const theme = extendTheme({ config, fonts });
export default theme;
