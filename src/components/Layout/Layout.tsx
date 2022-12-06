import { Container } from "@chakra-ui/react";
import Nav from "../Nav/Nav";

interface Props {
  children: React.ReactNode;
  imgURL?: string;
}
// add code comment for layout update
export const Layout: React.FC<Props> = ({ children, imgURL }) => {
  return (
    <Container>
      <Nav />
      {children}
    </Container>
  );
};
