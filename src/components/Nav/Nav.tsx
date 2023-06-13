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
        display="flex"
      >
        Carl Conroy
      </Link>
      <Flex
        className="Desktop Nav"
        display={{ base: "none", lg: "flex" }}
        flexDirection="row"
      >
        <NavItems />
      </Flex>
      <Flex>
        <Flex className="Mobile Nav" display={{ base: "flex", lg: "none" }}>
          <NavItems />
          <BurgerNav
            isOpen={isOpen}
            onToggle={onToggle}
            display={{ base: "flex", lg: "none" }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;
