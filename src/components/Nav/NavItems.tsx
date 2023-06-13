import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { MenuItems } from "./MenuItems";

export const NavItems = () => {
  const fontSize = { base: "10px", md: "15px", lg: "26.75px" };

  return (
    <Flex justifyContent="space-between">
      {MenuItems.map((item) => {
        return (
          <Link
            fontSize={fontSize}
            display={{ base: "none", lg: "flex" }}
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
        );
      })}
    </Flex>
  );
};
