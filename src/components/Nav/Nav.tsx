import NextLink from "next/link";
import { Link, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MenuItems } from "./MenuItems";
import { useState } from "react";

const Nav = () => {
  const fontSize = { base: "10px", md: "15px", lg: "26.75px" };
  const [display, setDisplay] = useState("none");
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        display={{ base: " none", lg: "flex" }}
      >
        Carl Conroy
      </Link>

      <Flex display="flex " flexFlow="no">
        {MenuItems.map((item) => {
          return (
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
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Nav;
