import ProjectPostCard from "../../src/components/Projects/ProjectPostCard";
import { Heading, Flex, Box, Container } from "@chakra-ui/react";

export default function ProjectPage() {
  const fontSize = { base: "10px", md: "15px", lg: "26.75px" };

  return (
    <Container>
      <Heading textAlign="center" fontSize={fontSize}>
        Projects
      </Heading>
      <Flex alignItems="center" pt={4} direction="column" textAlign="center">
        <Box>
          <ProjectPostCard />
        </Box>
      </Flex>
    </Container>
  );
}
