import Head from "next/head";
import { Container, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Cockroach Jamstack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading as="h1">Cockroach Jamstack</Heading>
        <Text>
          Get started by editing <code>pages/index.js</code>
        </Text>
      </main>
    </Container>
  );
}
