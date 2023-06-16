import { Container, Text, Heading, Flex, Box } from "@chakra-ui/react";
import GardenPostCard from "./GardenPostCard";
import Test from "./mdx/test.mdx";
export default function GardenPage() {
  const fontSize = { base: "10px", md: "15px", lg: "26.75px" };
  return (
    <Container maxW={{ base: "5xl", md: "5xl", lg: "5xl" }}>
      <Flex direction={{ base: "column", lg: "column" }}>
        <Heading fontSize={fontSize} textAlign="center">
          Welcome to the Garden
        </Heading>
        <Box mt={4}>
          <Text>
            This area was created as a place to store knowledge, and facilitate
            growth by keeping track of concepts I find important to self
            document. Rather than searching for a tutorial or a StackOverflow
            article, these entries exist to enforce programming principles I
            always want to keep in my back pocket.
          </Text>
          <Test />
        </Box>
        <Container>
          <GardenPostCard />
        </Container>
      </Flex>
    </Container>
  );
}
