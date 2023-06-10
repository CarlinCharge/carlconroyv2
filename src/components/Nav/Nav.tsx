import NextLink from "next/link";
import { Link, Flex } from "@chakra-ui/react";
import { MenuItems } from "./MenuItems";

const Nav = () => {
  const fontSize = "26.45px";
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Link as={NextLink} href="/" fontSize={fontSize}>
        Carl Conroy
      </Link>
      <Flex>
        {MenuItems.map((item) => {
          return (
            <Link
              fontSize={fontSize}
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
