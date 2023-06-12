import NextLink from "next/link";
import { Link, Flex, useDisclosure } from "@chakra-ui/react";
import BurgerNav from "./BurgerNav";
import { MenuItems } from "./MenuItems";

const Nav = () => {
  const fontSize = { base: "10px", md: "15px", lg: "26.75px" };
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Link
        as={NextLink}
        href="/"
        fontSize={fontSize}
        _hover={{
          color: "#A970FF",
          textDecoration: "underline",
        }}
        display={{ base: "none", lg: "flex" }}
      >
        Carl Conroy
      </Link>

      <Flex display="flex " flexFlow="no">
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
      <BurgerNav
        display={{ base: "flex", lg: "none" }}
        isOpen={isOpen}
        onToggle={onToggle}
      />
    </Flex>
  );
};

export default Nav;
