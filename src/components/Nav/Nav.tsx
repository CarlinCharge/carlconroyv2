import NextLink from "next/link";
import { Link, Flex, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MenuItems } from "./MenuItems";

const Nav = () => {
  const fontSize = { base: "10px", md: "40px", lg: "26.75px" };
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      display={{ base: "none", lg: "flex" }}
    >
      <Link
        as={NextLink}
        href="/"
        fontSize={fontSize}
        _hover={{
          color: "#A970FF",
          textDecoration: "underline",
        }}
      >
        Carl Conroy
      </Link>
      <IconButton
        aria-label="Open Menu"
        size="lg"
        display={{ base: "flex", md: "flex", lg: "none" }}
        icon={<HamburgerIcon />}
      />
      <Flex>
        {MenuItems.map((item) => {
          return (
            <Link
              fontSize={fontSize}
              maxW={{ base: "50%", md: "40px", lg: "6xl" }}
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
    </Flex>
  );
};

export default Nav;
