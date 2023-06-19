import { Container, Text, Heading, Flex, Box } from "@chakra-ui/react";
import { GardenPostCards } from "./GardenPostCard";
import Test from "./mdx/test.mdx";
export default function GardenPage() {
  const fontSize = { base: "10px", md: "15px", lg: "26.75px" };
  return (
    <Container maxW={{ base: "5xl", md: "5xl", lg: "6xl" }}>
      <Flex direction={{ base: "column", lg: "column" }}>
        <Heading fontSize={fontSize} textAlign="center">
          Welcome to the Garden
        </Heading>

        <Text pt={4}>
          This area was created as a place to store knowledge, and facilitate
          growth by keeping track of concepts I find important to self document.
          Rather than searching for a tutorial or a StackOverflow article, these
          entries exist to enforce programming principles I always want to keep
          in my back pocket.
        </Text>
        <Test />
        <Container maxW="6xl">
          <Flex
            alignItems="center"
            pt={4}
            direction="column"
            textAlign="center"
          >
            <Box>
              <GardenPostCards />
            </Box>
          </Flex>
        </Container>
      </Flex>
    </Container>
  );
}
