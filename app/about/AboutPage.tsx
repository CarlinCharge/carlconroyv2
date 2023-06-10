import { Container, Flex, Box, Heading, Image } from "@chakra-ui/react";
import Bio from "./Bio";

const AboutPage = () => {
  return (
    <Container maxW="6xl">
      <Flex justify="center">
        <Heading width="50%" textAlign="center">
          Carl Conroy is a visual storyteller, thoughtful UX designer, and
          software developer.
        </Heading>
      </Flex>
      <Flex gap="10" pt="10" justifyContent="center">
        <Box maxW="md">
          <Heading size="md" mb={4}>
            Outside Work
          </Heading>
          <Bio />
        </Box>
        <Image src="/carl.jpg" alt="CaAWL" width="30rem" maxH="300px"></Image>
      </Flex>
    </Container>
  );
};

export default AboutPage;
