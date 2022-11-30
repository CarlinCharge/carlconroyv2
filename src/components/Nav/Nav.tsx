import NextLink from "next/link";
import { Link, Flex, useStyleConfig, Container } from "@chakra-ui/react";
import { MenuItems } from "./MenuItems";

const Nav = () => {
  const styles = useStyleConfig("Nav");
  console.log(styles);
  return (
    <Container>
      <Flex __css={styles}>
        {MenuItems.map((item) => {
          return (
            <Link as={NextLink} href={item.href} key={item.text} mr="10px">
              {item.text}
            </Link>
          );
        })}
      </Flex>
    </Container>
  );
};

export default Nav;
