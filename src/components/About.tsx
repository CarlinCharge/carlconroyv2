import React from "react";
import { Container, Image, Flex, Box } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="6xl">
      <h1>About</h1>
      <Flex gap="10">
        <Box>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            eveniet deserunt nobis error ad nam, nulla blanditiis autem, tempora
            officiis non? Animi labore dignissimos molestias consectetur,
            obcaecati rem voluptas a.
          </h2>

          <h2>Stuff I've Done:</h2>
          <ul>
            <li>Sup</li>
            <li>Bro</li>
            <li>True</li>
          </ul>
        </Box>
        <Image src="/carl.jpg" alt="CaAWL" width="30rem"></Image>
      </Flex>
    </Container>
  );
};

export default About;
