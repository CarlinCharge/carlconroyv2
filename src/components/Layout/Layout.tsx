import { Container } from "@chakra-ui/react";
import Nav from "../Nav/Nav";

interface Props {
  children: React.ReactNode;
  imgURL?: string;
}
export const Layout: React.FC<Props> = ({ children, imgURL }) => {
  return (
    <Container maxWidth="4xl">
      <Nav />
      {children}
    </Container>
  );
};
