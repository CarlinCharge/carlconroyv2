import { Text, Container, Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import { GardenPosts } from "./GardenPosts";

export const GardenPostCards = () => {
  const fontSize = { base: "10px", md: "15px", lg: "26.75px" };

  return (
    <Flex direction={{ base: "column", lg: "column" }}>
      {GardenPosts.map((item) => {
        return (
          <Container pt={4}>
            <Link
              fontSize={fontSize}
              maxW={{ base: "2xs", md: "2xs", lg: "6xl" }}
              as={NextLink}
              href={item.href}
              key={item.title}
              pt="10px"
              p="4"
              _hover={{
                color: "#A970FF",
                textDecoration: "underline",
              }}
            >
              {item.title}
            </Link>
            <Text>{item.description}</Text>
          </Container>
        );
      })}
    </Flex>
  );
};
