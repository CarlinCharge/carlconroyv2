import NextLink from "next/link";
import { Link, Flex, useStyleConfig, Container } from "@chakra-ui/react";
import { MenuItems } from "./MenuItems";

const Nav = () => {
  const styles = useStyleConfig("Nav");
  console.log(styles);
  return (
    <Container>
      <Flex __css={styles}>
        <Link as={NextLink} href="/">
          Home
        </Link>

        <Link as={NextLink} href="/projects">
          Projects
        </Link>
      </Flex>
    </Container>
  );
};

export default Nav;