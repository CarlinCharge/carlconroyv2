import { Container, Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Layout } from "../Layout/Layout";

const Tech = () => {
  return (
    <Layout>
      <Flex>
        <Heading>Every Day Tech</Heading>
        <Heading size="md">What I Use To Work</Heading>

        <Heading size="md">What I Use To Play</Heading>
      </Flex>
    </Layout>
  );
};
export default Tech;
