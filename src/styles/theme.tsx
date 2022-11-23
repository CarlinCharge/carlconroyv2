import { extendTheme } from "@chakra-ui/react";
import { Button } from "./Button";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "white",
        color: "white",
      },
    },
  },
  colors: {
    green: "#7CEA9C",
    black: "#181818",
    white: "EFEFEF",
  },
  components: {
    Button,
  },
});
