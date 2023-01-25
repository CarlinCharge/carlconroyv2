import { Heading, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { Layout } from "../components/Layout/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Digital Garden</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <Layout>
          <Flex minH="100vh" align="center" justify="center">
            <Heading>The Future Location of My Digital Greenhouse 🌱</Heading>
          </Flex>
        </Layout>
      </main>
    </div>
  );
}
