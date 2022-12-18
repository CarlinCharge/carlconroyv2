import { Heading, Box, Text, Center, Flex } from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout";

const Projects = () => {
  return (
    <Layout>
      <Center>
        <Heading>Projects</Heading>
      </Center>
      <Flex justify="center" pt="12" direction="column">
        <Box>
          <Center>
            <Text>Client Film Review Platform</Text>
          </Center>
        </Box>
        <Box pt="2">
          <Center>
            <Text>Spotify Stats</Text>
          </Center>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Projects;
