import { Flex, Box, Text, Container, Avatar, VStack } from "@chakra-ui/react";
import Resume from "./resume.mdx";

export default function ResumePage() {
  return (
    <Container>
      <VStack m="2">
        <Text>Carl Conroy</Text>
      </VStack>
      <VStack m="2">
        <Avatar size="xl" src="/carl.jpg" />
      </VStack>
      <Resume />
    </Container>
  );
}
