import { Heading, Text, Box } from "@chakra-ui/react";

const ProjectPostCard = () => {
  return (
    <>
      <Box maxW="md" mt={4} border="solid" p={2}>
        <Heading fontSize="lg">Spotify Stats</Heading>
        <Text fontSize="md">View Your Personalized Spotify Profile Data</Text>
        <Text>React - Spotify API - ChakraUI - Vercel</Text>
      </Box>
    </>
  );
};
export default ProjectPostCard;
