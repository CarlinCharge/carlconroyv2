import { Heading, Box, Text, Center, Flex } from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout";
import ProjectPostCard from "../components/Projects/ProjectPostCard";

const Projects = () => {
  return (
    <Layout>
      <Heading textAlign="center">Projects</Heading>

      <Flex alignItems="center" pt="12" direction="column" textAlign="center">
        <Box>
          <ProjectPostCard />
        </Box>
      </Flex>
    </Layout>
  );
};

export default Projects;
