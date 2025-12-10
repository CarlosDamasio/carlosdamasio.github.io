import { Box, Text, Button, Link } from "@primer/react";
import Image from "react-bootstrap/Image";
import { Link as RouterLink } from "react-router-dom";
import cvData from "../../assets/cv-data.json";

function Home() {
  return (
    <Box
      flexDirection="column"
      alignItems="stretch"
      width="100%"
      sx={{ overflow: "auto" }}
    >
      {/* Hero Section */}
      <Box
        width="100%"
        textAlign="left"
        mb={4}
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "row"],
          gap: 3,
          alignItems: "center",
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Professional Headline */}
          <Box>
            <Text
              as="h1"
              sx={{
                fontSize: 6,
                fontWeight: "bold",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Lead Platform Engineer
            </Text>
            <Text
              as="p"
              sx={{
                fontSize: 2,
                color: "text.secondary",
                margin: 0,
                marginTop: 1,
              }}
            >
              Building scalable infrastructure & driving technical excellence
            </Text>
          </Box>

          {/* Professional Summary */}
          <Text as="p" sx={{ fontSize: 1, lineHeight: 1.6 }}>
            {cvData.professionalSummary}
          </Text>

          {/* Key Expertise Areas */}
          <Box>
            <Text as="p" sx={{ fontWeight: "bold", fontSize: 1, mb: 1 }}>
              Key Expertise:
            </Text>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {cvData.skills.languages.slice(0, 4).map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    bg: "canvas.subtle",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: 0,
                  }}
                >
                  {skill}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Call-to-Action Buttons */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
            <Button
              as={RouterLink}
              to="/CV"
              variant="primary"
              sx={{ textDecoration: "none" }}
            >
              View CV
            </Button>
            <Button
              as={RouterLink}
              to="/Projects"
              variant="default"
              sx={{ textDecoration: "none" }}
            >
              See Projects
            </Button>
            <Button
              as={Link}
              href={cvData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              sx={{ textDecoration: "none" }}
            >
              LinkedIn
            </Button>
            <Button
              as={Link}
              href={cvData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              sx={{ textDecoration: "none" }}
            >
              GitHub
            </Button>
          </Box>
        </Box>

        {/* Profile Image */}
        <Box
          sx={{
            flex: ["0 0 100%", "0 0 100%", "0 0 40%"],
            minWidth: 0,
          }}
        >
          <Image
            src="https://carlosdamasio-github-io.s3.us-west-2.amazonaws.com/images/home_image.jpg"
            alt="Carlos Damasio"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              maxWidth: "100%",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>

      {/* Experience Overview */}
      <Box width="100%" textAlign="left" mb={4} sx={{ borderTop: "1px solid", borderColor: "border.default", pt: 4 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 2 }}>
          Career Highlights
        </Text>
        <Box sx={{ display: "grid", gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"], gap: 3 }}>
          {cvData.experience.map((exp, idx) => (
            <Box key={idx} sx={{ p: 2, bg: "canvas.subtle", borderRadius: 2 }}>
              <Text as="h3" sx={{ fontWeight: "bold", fontSize: 1, margin: 0 }}>
                {exp.jobTitle}
              </Text>
              <Text as="p" sx={{ color: "text.secondary", fontSize: 0, margin: 0 }}>
                {exp.company} • {exp.location}
              </Text>
              <Text as="p" sx={{ fontSize: 0, margin: 0, mt: 1 }}>
                {new Date(exp.startDate).getFullYear()} -{" "}
                {exp.isCurrentRole
                  ? "Present"
                  : new Date(exp.endDate).getFullYear()}
              </Text>
              <Text as="p" sx={{ fontSize: 0, mt: 2, lineHeight: 1.5 }}>
                {exp.description}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>

      {/* About Section */}
      <Box width="100%" textAlign="left" sx={{ borderTop: "1px solid", borderColor: "border.default", pt: 4 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 2 }}>
          About This Site
        </Text>
        <Text as="p" sx={{ lineHeight: 1.6 }}>
          Welcome to my professional portfolio. This site serves as a comprehensive showcase of my
          career, expertise, and projects. Explore my CV, past work, and technical skills to learn
          more about what I bring to the table. Feel free to connect via LinkedIn or GitHub!
        </Text>
      </Box>
    </Box>
  );
}
export default Home;
