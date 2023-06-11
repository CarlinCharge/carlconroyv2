import { Container, Text, Heading, Flex, Box } from "@chakra-ui/react";
import GardenPostCard from "./GardenPostCard";
export default function GardenPage() {
  const fontSize = { base: "10px", md: "1xs", lg: "26.75px" };
  return (
    <Container maxW={{ base: "sm", md: "4xl", lg: "6xl" }}>
      <Flex direction="column">
        <Heading fontSize={fontSize}>Welcome to the Garden </Heading>
        <Box mt={4}>
          <Text>
            This area was created as a place to store knowledge, and facilitate
            growth by keeping track of concepts I find important to self
            document. Rather than searching for a tutorial or a StackOverflow
            article, these entries exist to enforce programming principles I
            always want to keep in my back pocket.
          </Text>
        </Box>
        <Box>
          <GardenPostCard />
        </Box>
      </Flex>
    </Container>
  );
}
