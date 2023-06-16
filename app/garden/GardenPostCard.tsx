import { Heading, Text, Box, Container, Code } from "@chakra-ui/react";

const GardenPostCard = () => {
  return (
    <Container maxW={{ base: "sm", md: "1xs", lg: "5xl" }}>
      <Box maxW="md" mt={4} border="solid" p={2}>
        <Heading fontSize="lg">The useState Hook Explained</Heading>
        <Text fontSize="md">An overview of useState</Text>
        <Text>What Is It Used For And How Do I Use It?</Text>
      </Box>

      <Box maxW="md" mt={4} border="solid" p={2}>
        <Heading fontSize="lg">The useEffect Hook Explained</Heading>
        <Text fontSize="md">The Difference Between useEffect and useState</Text>
        <Text>How Do They Work Together?</Text>
      </Box>
      <Box maxW="md" mt={4} border="solid" p={2}>
        <Heading fontSize="lg">getStaticProps</Heading>
        <Text fontSize="md">
          What Is Server Side Rendering? How Does getStaticProps Work?{" "}
        </Text>
        <Text>A Short Guide On Data Fetching</Text>
      </Box>
      <Box maxW="md" mt={4} border="solid" p={2}>
        <Heading fontSize="lg">MDX in Next13</Heading>
        <Text fontSize="md">What's New In Setting Up MDX Within Next13? </Text>
        <Text>
          A Quick And Dirty Guide On <Code colorScheme="black"> @next/mdx</Code>
        </Text>
      </Box>
    </Container>
  );
};
export default GardenPostCard;
