import { Heading, Text, Card, Box } from "@chakra-ui/react";
interface Props {}

const GardenPostCard = () => {
  return (
    <>
      <Box maxW="md" mt={4} border="solid">
        <Heading fontSize="lg">The useState Hook Explained</Heading>
        <Text fontSize="md">An overview of useState</Text>
        <Text>What is it used for and how do I use it?</Text>
      </Box>

      <Box maxW="md" mt={4} border="solid">
        <Heading fontSize="lg">The useEffect Hook Explained</Heading>
        <Text fontSize="md">The Difference Between useEffect and useState</Text>
        <Text>How do they work together?</Text>
      </Box>
    </>
  );
};
export default GardenPostCard;
