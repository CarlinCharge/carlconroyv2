import { Container } from "@chakra-ui/react";
import Nav from "../Nav/Nav";
import { StickySocials } from "../Socials/StickySocials";

interface Props {
  children: React.ReactNode;
}
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth="6xl">
      <Nav />
      <StickySocials />
      {children}
    </Container>
  );
};
