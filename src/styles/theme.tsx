import { extendTheme } from "@chakra-ui/react";
import { Nav } from "./Nav";
import { GardenPostCard } from "./GardenPostCard";

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
    purple: "#A970FF",
  },
  components: {
    Nav,
    GardenPostCard,
  },
});
