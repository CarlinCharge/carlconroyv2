import { Flex, Link, Container, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import ProjectPosts from "./ProjectPosts";

export const ProjectItems = () => {
  const fontSize = { base: "10px", md: "15px", lg: "26.75px" };

  return (
    <Flex direction={{ base: "column", lg: "row" }}>
      {ProjectPosts.map((item) => {
        return (
          <Container>
            <Link
              fontSize={fontSize}
              maxW={{ base: "2xs", md: "2xs", lg: "6xl" }}
              as={NextLink}
              href={item.href}
              key={item.text}
              mr="10px"
              p="4"
              _hover={{
                color: "#A970FF",
                textDecoration: "underline",
              }}
            >
              {item.text}
            </Link>
            <Text>{item.description}</Text>
          </Container>
        );
      })}
    </Flex>
  );
};
export default ProjectItems;
