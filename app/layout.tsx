"use client";

import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "./../src/styles/theme";

import Nav from "../src/components/Nav/Nav";
import { StickySocials } from "../src/components/Socials/StickySocials";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <Container maxW="6xl">
            <Nav />
            <StickySocials />
            {children}
          </Container>
        </ChakraProvider>
      </body>
    </html>
  );
}
