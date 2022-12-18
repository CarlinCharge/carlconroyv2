import { Heading, Flex, Center } from "@chakra-ui/react";
import Head from "next/head";
import { Layout } from "../components/Layout/Layout";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Digital Garden</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Flex direction="column"></Flex>
          <Flex justify="center" width="50vw">
            <Center w="50%" h="200px" position="absolute">
              <Heading>The Future Location of My Digital Garden</Heading>
            </Center>
          </Flex>
        </Layout>
      </main>
    </div>
  );
}
