"use client";

import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "./../src/styles/theme";
import { FontFaces } from "../src/styles/FontFaces";

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
          <FontFaces />
          <Container maxW={{ base: "5xl", md: "2xl", lg: "6xl" }}>
            <StickySocials />
            <Nav />
            {children}
          </Container>
        </ChakraProvider>
      </body>
    </html>
  );
}
