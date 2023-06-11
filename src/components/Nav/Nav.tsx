import NextLink from "next/link";
import { Link, Flex, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MenuItems } from "./MenuItems";
import { useState } from "react";

const Nav = () => {
  const fontSize = { base: "10px", md: "40px", lg: "26.75px" };
  const [display, setDisplay] = useState("none");
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
      >
        Carl Conroy
      </Link>
      <IconButton
        aria-label="Open Menu"
        size="lg"
        overflowY="auto"
        flexDir="column"
        icon={<HamburgerIcon />}
        display={{ base: "flex", lg: "none" }}
        onClick={() => {
          setDisplay("flex");
        }}
      />
      <Flex display={{ base: "none", lg: "flex" }}>
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
      <Flex
        width="100vw"
        height="100vh"
        backgroundColor="black.50"
        zIndex={20}
        top="0"
        left="0"
        overflow="auto"
        flexDirection="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => {
              setDisplay("none");
            }}
          />
        </Flex>
        <Flex direction="column" alignItems="center">
          {MenuItems.map((item) => {
            return (
              <Link
                onClick={() => {
                  setDisplay("none");
                }}
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
    </Flex>
  );
};

export default Nav;
