import React from "react";
import { Container, Image, Flex, Box, Heading } from "@chakra-ui/react";
import { Bio } from "./Bio";

const About = () => {
  return (
    <Container maxW="6xl">
      <Flex justify="center">
        <Heading width="50%" textAlign="center">
          Carl Conroy is a visual storyteller, thoughtful UX designer, and
          software developer.
        </Heading>
      </Flex>
      <Flex gap="10" pt="10" justifyContent="center">
        <Box maxW="sm">
          <Heading size="md">Outside Work</Heading>
          <Bio />
        </Box>
        <Image src="/carl.jpg" alt="CaAWL" width="30rem" maxH="300px"></Image>
      </Flex>
    </Container>
  );
};

export default About;
