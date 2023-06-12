"use client";

import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "./../src/styles/theme";

import Nav from "../src/components/Nav/Nav";
import { StickySocials } from "../src/components/Socials/StickySocials";

import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  // Specifying weight is only required for
  // non-variable fonts.
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <ChakraProvider theme={theme}>
          <Container maxW={{ base: "5xl", md: "40px", lg: "6xl" }}>
            <Nav />
            <StickySocials />
            {children}
          </Container>
        </ChakraProvider>
      </body>
    </html>
  );
}
