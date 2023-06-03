import {
  Heading,
  Flex,
  Box,
  Text,
  Container,
  Avatar,
  VStack,
} from "@chakra-ui/react";

export const ResumeContent = () => {
  return (
    <Container>
      <Flex direction="column">
        <VStack m="2">
          <Text>Carl Conroy</Text>
        </VStack>
        <VStack m="2">
          <Avatar size="xl" src="/carl.jpg" />
        </VStack>
        <Flex justifyContent="center">
          <Box>
            <Box maxW="450px">
              <Text fontSize="md">
                Skillsets: React.js, Next.js, GraphQL, PostgreSQL, Javascript,
                Docker, Vercel, Firebase Experience
              </Text>
            </Box>
            <Box maxW="600px">
              <Text fontSize="lg" fontWeight="bold">
                Application Manager / Software Developer Crown Castle
              </Text>
              <Text fontSize="md">(Oct 2016 - Present)</Text>
              Front End Web Developer - UI Developer using React.js and Redux
              Full Stack Developer - NSS Web Microservices Developer Application
              Engineering Team member managing multiple internal applications
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                Lead Web Developer Phoenix Pinelands Corporation
              </Text>
              (5 months) Lead Front End Web Developer
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};
