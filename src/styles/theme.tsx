import { extendTheme } from "@chakra-ui/react";
import { Button } from "./Button";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "black",
      },
    },
  },
  colors: {
    green: "#7CEA9C",
    black: "#181818",
  },
  components: {
    Button,
  },
});
