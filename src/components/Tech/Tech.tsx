import {
  Box,
  Flex,
  Heading,
  Center,
  List,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import { Layout } from "../Layout/Layout";

const Tech = () => {
  return (
    <Layout>
      <Flex direction="column">
        <Center>
          <Heading>Every Day Tech</Heading>
        </Center>
        <Box mt="10">
          <Heading size="md">What I Use To Work</Heading>
          <Spacer />
          <List mt="5">
            <ListItem>Macbook Pro 2016 </ListItem>
            <ListItem>VS Code</ListItem>
            <ListItem>MX Master 3S</ListItem>
          </List>
        </Box>
        <Box mt="10">
          <Heading size="md">What I Use To Play</Heading>
          <Spacer />
          <List mt="5">
            <ListItem>
              Lian Li O11 Dynamic EVO Tempered Glass ATX Mid-Tower Computer Case
            </ListItem>
            <ListItem>
              Gigabyte NVIDIA GeForce RTX 3080 Ti VISION Overclocked Triple-Fan
              12GB
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Layout>
  );
};
export default Tech;
