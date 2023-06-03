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
              <Text fontWeight="bold">Skillsets:</Text>
              <Text mb="5">
                React.js, Next.js, GraphQL, PostgreSQL, Javascript, Docker,
                Vercel, Firebase Experience
              </Text>
            </Box>
            <Box maxW="600px">
              <Text fontSize="lg" fontWeight="bold">
                Application Manager / Software Developer Crown Castle
              </Text>
              <Text fontSize={{ base: "sm", lg: "md" }} noOfLines={3}>
                (Oct 2016 - Present)
              </Text>
              <Text
                mb={4}
                fontSize={{ base: "sm", lg: "md" }}
                h={{ base: 16, lg: "4.5rem" }}
              >
                Front End Web Developer - UI Developer using React.js and Redux
                Full Stack Developer - NSS Web Microservices Developer
                Application Engineering Team member managing multiple internal
                applications
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                Lead Web Developer Phoenix Pinelands Corporation
              </Text>
              <Text>(5 months)</Text> Lead Front End Web Developer
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};
