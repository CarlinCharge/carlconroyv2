import { Flex, Link, useDisclosure } from "@chakra-ui/react";
import NextLink from "next/link";
import { MenuItems } from "./MenuItems";

export const NavItems = () => {
  const fontSize = { base: "10px", md: "15px", lg: "26.75px" };

  return (
    <Flex direction={{ base: "column", lg: "row" }}>
      {MenuItems.map(({ href, text }) => {
        return (
          <Link
            fontSize={fontSize}
            maxW={{ base: "2xs", md: "2xs", lg: "6xl" }}
            as={NextLink}
            href={href}
            key={text}
            mr="10px"
            p="4"
            _hover={{
              color: "#A970FF",
              textDecoration: "underline",
            }}
          >
            {text}
          </Link>
        );
      })}
    </Flex>
  );
};
