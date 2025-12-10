import { Box, Text, Button, Link } from "@primer/react";
import Image from "react-bootstrap/Image";
import { Link as RouterLink } from "react-router-dom";
import { Octicon } from "@primer/react";
import { FeedTagIcon } from "@primer/octicons-react";
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
              {cvData.personalInfo?.title || "Senior Software Engineer"}
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
              Analytics Platform & Business Intelligence Expert
            </Text>
          </Box>

          {/* Professional Summary */}
          <Text as="p" sx={{ fontSize: 1, lineHeight: 1.6 }}>
            {cvData.professionalSummary}
          </Text>

          {/* Current Role Highlight */}
          <Box sx={{ p: 2, bg: "canvas.subtle", borderRadius: 2, borderLeft: "4px solid", borderColor: "accent.fg" }}>
            <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", margin: 0, mb: 1 }}>
              Current Role
            </Text>
            <Text as="p" sx={{ fontSize: 0, margin: 0, lineHeight: 1.5 }}>
              <strong>{cvData.experience[0]?.jobTitle}</strong> at {cvData.experience[0]?.company} ({cvData.experience[0]?.location})<br />
              {cvData.experience[0]?.description}
            </Text>
          </Box>

          {/* Key Expertise Areas */}
          <Box>
            <Text as="p" sx={{ fontWeight: "bold", fontSize: 1, mb: 1 }}>
              Key Expertise:
            </Text>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {cvData.experience[0]?.technologies?.slice(0, 6).map((skill) => (
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
              href="https://www.linkedin.com/in/cdamasio19/"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              sx={{ textDecoration: "none" }}
            >
              LinkedIn
            </Button>
            <Button
              as={Link}
              href="https://github.com/CarlosDamasio"
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

      {/* Career Timeline Overview */}
      <Box width="100%" textAlign="left" mb={4} sx={{ borderTop: "1px solid", borderColor: "border.default", pt: 4 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 3 }}>
          Professional Journey
        </Text>
        
        {/* PlayStation Section */}
        <Box mb={4}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 2 }}>
            <Octicon icon={FeedTagIcon} size={24} sx={{ color: "accent.fg", mt: 1 }} />
            <Box>
              <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", margin: 0 }}>
                Senior Platform Engineer at Sony PlayStation
              </Text>
              <Text as="p" sx={{ fontSize: 0, color: "text.secondary", margin: 0 }}>
                London, UK • July 2019 to Present
              </Text>
            </Box>
          </Box>
          <Text as="p" sx={{ fontSize: 0, ml: 6, lineHeight: 1.6, color: "text.primary" }}>
            Working as Senior Platform Engineer for the Analytics Platform team. My work focuses on hosting, 
            managing and enhancing our Analytics tools stacks such as MicroStrategy, Tableau and Snowflake. 
            Responsibilities include infrastructure management, platform optimization, and team mentoring.
          </Text>
        </Box>

        {/* Previous PlayStation Role */}
        <Box mb={4}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 2 }}>
            <Octicon icon={FeedTagIcon} size={24} sx={{ color: "text.secondary", mt: 1 }} />
            <Box>
              <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", margin: 0 }}>
                Senior Business Intelligence Engineer at Sony PlayStation
              </Text>
              <Text as="p" sx={{ fontSize: 0, color: "text.secondary", margin: 0 }}>
                London, UK • August 2016 to July 2019
              </Text>
            </Box>
          </Box>
          <Text as="p" sx={{ fontSize: 0, ml: 6, lineHeight: 1.6, color: "text.primary" }}>
            Developed dashboards and reporting solutions, built data pipelines and data structures. 
            Mentored business users on extracting value from team products and managed business 
            requirements for further enhancements.
          </Text>
        </Box>

        {/* Novabase Experience Preview */}
        <Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 2 }}>
            <Octicon icon={FeedTagIcon} size={24} sx={{ color: "text.secondary", mt: 1 }} />
            <Box>
              <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", margin: 0 }}>
                Business Intelligence Projects at Novabase
              </Text>
              <Text as="p" sx={{ fontSize: 0, color: "text.secondary", margin: 0 }}>
                Multiple countries • Various industries
              </Text>
            </Box>
          </Box>
          <Text as="p" sx={{ fontSize: 0, ml: 6, lineHeight: 1.6, color: "text.primary" }}>
            Worked on multiple Business Intelligence projects across various industries and countries including 
            Vodafone (UK) and Movicel (Angola). Led BI teams, managed reporting platforms, and oversaw ETL development.
          </Text>
        </Box>

        {/* Link to see more */}
        <Box sx={{ mt: 3, p: 2, bg: "canvas.subtle", borderRadius: 2 }}>
          <Text as="p" sx={{ fontSize: 0, mb: 1 }}>
            Want to see more details about my career journey and projects?
          </Text>
          <Button
            as={RouterLink}
            to="/Projects"
            size="small"
            variant="primary"
            sx={{ textDecoration: "none" }}
          >
            Explore My Work
          </Button>
        </Box>
      </Box>

      {/* Education & Certifications */}
      <Box width="100%" textAlign="left" mb={4} sx={{ borderTop: "1px solid", borderColor: "border.default", pt: 4 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 3 }}>
          Education & Certifications
        </Text>
        
        <Box sx={{ display: "grid", gridTemplateColumns: ["1fr", "1fr 1fr"], gap: 3 }}>
          {/* Education */}
          <Box sx={{ p: 2, bg: "canvas.subtle", borderRadius: 2 }}>
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 2, margin: 0 }}>
              Academic Background
            </Text>
            <Text as="p" sx={{ fontSize: 0, mb: 1, margin: 0 }}>
              <strong>ISCTE-IUL (Lisbon, Portugal)</strong>
            </Text>
            <Text as="p" sx={{ fontSize: 0, color: "text.secondary", margin: 0 }}>
              BSc in Computer Science and Business Administration
            </Text>
          </Box>

          {/* Certifications */}
          <Box sx={{ p: 2, bg: "canvas.subtle", borderRadius: 2 }}>
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 2, margin: 0 }}>
              Professional Certifications
            </Text>
            <Text as="p" sx={{ fontSize: 0, mb: 1, margin: 0 }}>
              ✓ AWS Certified Solutions Architect Associate (2019)
            </Text>
            <Text as="p" sx={{ fontSize: 0, margin: 0 }}>
              ✓ MicroStrategy Certified Engineering Principal (2015)
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Languages Section */}
      <Box width="100%" textAlign="left" mb={4} sx={{ borderTop: "1px solid", borderColor: "border.default", pt: 4 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 2 }}>
          Languages
        </Text>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ p: 2, bg: "canvas.subtle", borderRadius: 2, flex: 1 }}>
            <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", margin: 0 }}>
              English
            </Text>
            <Text as="p" sx={{ fontSize: 0, color: "text.secondary", margin: 0 }}>
              Fluent
            </Text>
          </Box>
          <Box sx={{ p: 2, bg: "canvas.subtle", borderRadius: 2, flex: 1 }}>
            <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", margin: 0 }}>
              Portuguese
            </Text>
            <Text as="p" sx={{ fontSize: 0, color: "text.secondary", margin: 0 }}>
              Native
            </Text>
          </Box>
        </Box>
      </Box>

      {/* About Section */}
      <Box width="100%" textAlign="left" sx={{ borderTop: "1px solid", borderColor: "border.default", pt: 4 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 2 }}>
          About This Site
        </Text>
        <Text as="p" sx={{ lineHeight: 1.6 }}>
          Welcome to my professional portfolio. This site serves as a comprehensive showcase of my career 
          in Business Intelligence and Analytics. Explore my detailed CV, past work across multiple companies 
          and industries, and technical expertise. I'm based in London, UK, but have worked across Europe 
          and Africa. Feel free to connect via LinkedIn or GitHub!
        </Text>
      </Box>
    </Box>
  );
}
export default Home;
