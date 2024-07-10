import { Box, Text } from "@primer/react";
import Image from "react-bootstrap/Image";
function Home() {
  return (
    <Box flexDirection="column" alignItems="center" width="100%">
      <Box width="100%" textAlign="left" mb={3}>
        <Text as="p" sx={{ fontWeight: "bold" }}>
          Welcome to CarlosDamasio.com
        </Text>
      </Box>
      <Box display="flex" width="100%">
        <Box mr={2} p={2} textAlign="left" borderRadius={2}>
          <Text as="p">
            This space is meant to be a static website coalescing some
            information about myself and created mostly for experimentation.
          </Text>
          <Text as="p">
            My linkedin and github accounts together with my cv are the main
            foundation for the content on this site with some extras to come.
          </Text>
          <Text as="p">
            I'm currently a Senior Platform Engineer at Sony PlayStation with a
            big focus on Business Intelligence systems where I have over a
            decade worth of experience.
          </Text>
          <Text as="p">
            At the moment I'm based in the UK, specifically in London but
            through my career I have developed and managed Business Intelligence
            solutions in different countries such as Angola, Brasil, Portugal
            and across various industries like Games, Public Administration and
            Telecommunications
          </Text>
        </Box>
        <Box ml={2} p={2} borderRadius={2}>
          <Image
            src="https://carlosdamasio-github-io.s3.us-west-2.amazonaws.com/images/home_image.jpg"
            alt="HomeImage"
            style={{ width: "300px", height: "300px", borderRadius: "15px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
export default Home;
