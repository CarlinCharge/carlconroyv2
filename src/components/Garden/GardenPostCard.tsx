import { Heading, Text, Card, Box } from "@chakra-ui/react";
interface Props {}

const GardenPostCard = () => {
  return (
    <>
      <Box maxW="md" mt={4} border="solid">
        <Heading fontSize="lg">The useState Hook Explained</Heading>
        <Text fontSize="md">An overview of useState</Text>
        <Text>What Is It Used For And How Do I Use It?</Text>
      </Box>

      <Box maxW="md" mt={4} border="solid">
        <Heading fontSize="lg">The useEffect Hook Explained</Heading>
        <Text fontSize="md">The Difference Between useEffect and useState</Text>
        <Text>How Do They Work Together?</Text>
      </Box>
      <Box maxW="md" mt={4} border="solid">
        <Heading fontSize="lg">getStaticProps</Heading>
        <Text fontSize="md">
          What Is Server Side Rendering? How Does getStaticProps Work?{" "}
        </Text>
        <Text>A Short Guide On Data Fetching</Text>
      </Box>
    </>
  );
};
export default GardenPostCard;
