import React from "react";
import { Container, Image, Flex, Box, Heading } from "@chakra-ui/react";
import Tooling from "./About/Tooling";

const About = () => {
  return (
    <Container maxW="6xl">
      <Heading>About</Heading>
      <Flex gap="10">
        <Box>
          <Heading size="md">Stuff I've Done:</Heading>
          <Tooling />
        </Box>
        <Image src="/carl.jpg" alt="CaAWL" width="30rem"></Image>
      </Flex>
    </Container>
  );
};

export default About;
