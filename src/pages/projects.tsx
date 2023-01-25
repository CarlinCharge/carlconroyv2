import { Heading, Box, Text, Center, Flex } from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout";

const Projects = () => {
  return (
    <Layout>
      <Center>
        <Heading>Projects</Heading>
      </Center>
      <Flex justify="center" pt="12" direction="column" textAlign="center">
        <Box>
          <Text>Client Film Review Platform</Text>
        </Box>
        <Box pt="2">
          <Text>Spotify Stats</Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Projects;
