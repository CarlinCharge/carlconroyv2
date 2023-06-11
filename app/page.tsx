"use client";
import { Heading, Flex } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Digital Garden</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <Flex minH="100vh" align="center" justify="center">
          <Heading fontSize={{ base: "sm", lg: "26.75px" }}>
            The Future Location of My Digital Greenhouse 🌱
          </Heading>
        </Flex>
      </main>
    </div>
  );
}