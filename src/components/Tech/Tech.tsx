import {
  Box,
  Flex,
  Heading,
  Center,
  List,
  ListItem,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { Layout } from "../Layout/Layout";
import NextLink from "next/link";
import { TechItems } from "./TechItems";

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
            {TechItems.map((item) => {
              return (
                <ListItem>
                  <Link as={NextLink} href={item.href} key={item.text}>
                    {item.text}
                  </Link>
                </ListItem>
              );
            })}
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
