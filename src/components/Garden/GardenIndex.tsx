import { Container, Text, Heading, Flex, Box } from "@chakra-ui/react";
const GardenIndex = () => {
  return (
    <Container>
      <Flex direction="column">
        <Heading>Welcome to the Garden </Heading>
        <Box mt={4}>
          <Text>
            This area was created as a place to store knowledge, and facilitate
            growth by keeping track of concepts I find important to self
            document. Rather than searching for a tutorial or a StackOverflow
            article, these entries exist to enforce programming principles I
            always want to keep in my back pocket.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default GardenIndex;
