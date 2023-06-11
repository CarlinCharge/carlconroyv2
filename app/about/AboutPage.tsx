import { Container, Flex, Box, Heading, Image } from "@chakra-ui/react";
import Bio from "./Bio";

const AboutPage = () => {
  const fontSize = { base: "10px", md: "15px", lg: "26.75px" };
  return (
    <Container maxW="6xl">
      <Flex justify="center">
        <Heading width="50%" textAlign="center" fontSize={fontSize}>
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
        <Image
          src="/carl.jpg"
          alt="CaAWL"
          width={{ base: "30rem" }}
          maxH="300px"
          display={{ base: "none", lg: "block" }}
        ></Image>
      </Flex>
    </Container>
  );
};

export default AboutPage;
