import { extendTheme } from "@chakra-ui/react";
import { Button } from "./Button";
import { Nav } from "./Nav";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "black",
        color: "white",
      },
    },
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
  colors: {
    green: "#7CEA9C",
    black: "#181818",
    white: "#EFEFEF",
  },
  components: {
    Button,
    Nav,
  },
});
