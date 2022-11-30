import NextLink from "next/link";
import { Link, Container, Spacer } from "@chakra-ui/react";
import { MenuItems } from "./MenuItems";

const Nav = () => {
  return (
    <Container>
      <Link as={NextLink} href="/">
        Home
      </Link>

      <Link as={NextLink} href="/projects">
        Projects
      </Link>
    </Container>
  );
};

export default Nav;

// MenuItems.map((items)) => {
//     return(
//     <Link as={NextLink} href={items}>
//         Home
//       </Link>
//     )
// }
