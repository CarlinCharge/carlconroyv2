import { Container, Text, Box, Link } from "@chakra-ui/react";

export default function Bio() {
  const url = "http://www.carlconroydesign.com";
  const figma = "https://www.figma.com";
  return (
    <Container>
      <Text fontWeight="bold">Who am I?</Text>
      <Box>
        <Text mb={4} textAlign="left">
          I &apos;ve been building software since 2016. When I got started I
          began with Ruby/Ruby on Rails but these days I build entire
          applications using React and a wealth of tools to manage the backend
          quickly.
        </Text>
        <Text mb={4}>
          You can find some of my recent work in the{" "}
          <Link href="/projects" fontWeight="bold">
            Projects{" "}
          </Link>{" "}
          section of my portfolio including the details on how I built this
          website from concept to completed product.
        </Text>
        <Text mb={4}>
          Technical communication and design are important when it comes to
          bringing an application or website to life. I use{" "}
          <Link href={figma} fontWeight="bold">
            Figma
          </Link>{" "}
          to design UI and produce mockups to effectively establish unified
          vision. From there I can scaffold a system using primarily React as a
          development framework in tandem with the tools I see fit for the job.
        </Text>
      </Box>
      <Box>
        <Link
          href={url}
          fontWeight="bold"
          _hover={{
            color: "#A970FF",
            textDecoration: "underline",
          }}
        >
          Carl Conroy Design{" "}
        </Link>
        <Text>
          I have my own production company. Primarily I have been a wedding
          filmmaker but I have done a variety of commercial work as well.
        </Text>
      </Box>
    </Container>
  );
}
