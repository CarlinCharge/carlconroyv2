import { Container } from "@chakra-ui/react";
import Nav from "../Nav/Nav";

interface Props {
  children: React.ReactNode;
}
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth="6xl">
      <Nav />
      {children}
    </Container>
  );
};
