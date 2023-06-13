import NextLink from "next/link";
import { Link, Flex, useDisclosure } from "@chakra-ui/react";
import BurgerNav from "./BurgerNav";
import { NavItems } from "./NavItems";

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
        display={{ base: "flex", lg: "flex" }}
      >
        Carl Conroy
      </Link>
      <Flex display="flex " flexFlow="no">
        <NavItems />
      </Flex>
      <BurgerNav
        isOpen={isOpen}
        onToggle={onToggle}
        display={{ base: "flex", lg: "none" }}
      />
    </Flex>
  );
};

export default Nav;
