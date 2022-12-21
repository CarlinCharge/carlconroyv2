import React from "react";
import { Container, Image, Flex, Box, Heading, Center } from "@chakra-ui/react";
import Tooling from "./Tooling";

const About = () => {
  return (
    <Container maxW="6xl" align="center">
      <Flex align="center" justify="center">
        <Heading width="50%">
          Carl Conroy is a visual storyteller, thoughtful UX designer, and
          software developer.
        </Heading>
      </Flex>
      <Flex gap="10" pt="10">
        <Box>
          <Heading size="md">Outside Work</Heading>
          <Tooling />
        </Box>
        <Image src="/carl.jpg" alt="CaAWL" width="30rem"></Image>
      </Flex>
    </Container>
  );
};

export default About;
