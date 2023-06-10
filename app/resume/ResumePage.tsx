import {
  Flex,
  Box,
  Text,
  Container,
  Avatar,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function ResumePage() {
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
            <Box maxW="1000px">
              <Text fontSize="lg" fontWeight="bold">
                Application Manager / Software Developer Crown Castle (Oct 2016
                - Present)
              </Text>
              <Text mb={4}>
                <UnorderedList styleType="none">
                  <ListItem>
                    - Front End Web Developer - UI Developer using React.js
                    <ListItem>- NSS Web Microservices Developer</ListItem>
                  </ListItem>
                  <ListItem>
                    - Application Engineering Team member managing multiple
                    internal applications
                  </ListItem>
                </UnorderedList>
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                Lead Web Developer Phoenix Pinelands Corporation (5 months)
              </Text>
              Lead Front End Web Developer
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
