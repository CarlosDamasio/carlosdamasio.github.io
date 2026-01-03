import { Box, Text, Button, Link } from "@primer/react";
import Image from "react-bootstrap/Image";
import { Octicon } from "@primer/react";
import { FeedTagIcon } from "@primer/octicons-react";
import cvData from "../../data/cv-data.json";

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
                fontWeight: "var(--font-weight-bold)",
                margin: 0,
                lineHeight: "var(--line-height-tight)",
                color: "var(--accent-primary)",
              }}
            >
              {cvData.personalInfo?.title || "Senior Software Engineer"}
            </Text>
            <Text
              as="p"
              sx={{
                fontSize: 2,
                color: "var(--text-secondary)",
                margin: 0,
                marginTop: 1,
              }}
            >
              Platform Engineering | Cloud Computing | Analytics & Developer Platforms
            </Text>
          </Box>

          {/* Professional Summary */}
          <Text as="p" sx={{ fontSize: 1, lineHeight: "var(--line-height-relaxed)", color: "var(--text-primary)" }}>
            {cvData.professionalSummary}
          </Text>

          {/* Current Role Highlight */}
          <Box sx={{ p: 2, bg: "var(--bg-secondary)", borderRadius: "var(--radius-md)", borderLeft: "4px solid", borderColor: "var(--accent-primary)" }}>
            <Text as="p" sx={{ fontSize: 0, fontWeight: "var(--font-weight-bold)", margin: 0, mb: 1, color: "var(--text-secondary)" }}>
              Current Role
            </Text>
            <Text as="p" sx={{ fontSize: 0, margin: 0, lineHeight: "var(--line-height-normal)", color: "var(--text-primary)" }}>
              <strong style={{ color: "var(--accent-primary)" }}>{cvData.experience[0]?.jobTitle}</strong> at {cvData.experience[0]?.company} ({cvData.experience[0]?.location})<br />
              {cvData.experience[0]?.description}
            </Text>
          </Box>

          {/* Key Expertise Areas */}
          <Box>
            <Text as="p" sx={{ fontWeight: "var(--font-weight-bold)", fontSize: 1, mb: 1, color: "var(--accent-primary)" }}>
              Key Expertise:
            </Text>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {cvData.experience[0]?.technologies?.slice().map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    bg: "var(--bg-secondary)",
                    px: 2,
                    py: 1,
                    borderRadius: "var(--radius-md)",
                    fontSize: 0,
                    color: "var(--accent-primary)",
                    border: "1px solid var(--border-primary)",
                  }}
                >
                  {skill}
                </Box>
              ))}
            </Box>
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
      <Box width="100%" textAlign="left" mb={4} sx={{ borderTop: "1px solid", borderColor: "var(--border-primary)", pt: 4 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "var(--font-weight-bold)", mb: 3, color: "var(--accent-primary)" }}>
          Professional Journey
        </Text>
        
        {/* Bank of England - Current Role */}
        <Box mb={4}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 2 }}>
            <Octicon icon={FeedTagIcon} size={24} sx={{ color: "var(--accent-primary)", mt: 1 }} />
            <Box>
              <Text as="h3" sx={{ fontSize: 1, fontWeight: "var(--font-weight-bold)", margin: 0, color: "var(--accent-primary)" }}>
                Lead Platform Engineer at Bank of England
              </Text>
              <Text as="p" sx={{ fontSize: 0, color: "var(--text-secondary)", margin: 0 }}>
                London, UK • November 2024 to Present
              </Text>
            </Box>
          </Box>
          <Text as="p" sx={{ fontSize: 0, ml: 6, lineHeight: "var(--line-height-relaxed)", color: "var(--text-primary)" }}>
            Lead Platform Engineer focusing on the Developer Platform, particularly in CI/CD (GitHub Self-hosted Runners) and Observability stacks (Grafana/Prometheus). 
            Developing integration and automation solutions to enhance developer experience and operational efficiency.
            Architect containerised application deployments on Kubernetes and mentoring on Python and modern DevOps methodologies.
          </Text>
        </Box>

        {/* Sony Senior Platform Engineer Role */}
        <Box mb={4}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 2 }}>
            <Octicon icon={FeedTagIcon} size={24} sx={{ color: "var(--text-secondary)", mt: 1 }} />
            <Box>
              <Text as="h3" sx={{ fontSize: 1, fontWeight: "var(--font-weight-bold)", margin: 0, color: "var(--accent-primary)" }}>
                Senior Platform Engineer at Sony Interactive Entertainment
              </Text>
              <Text as="p" sx={{ fontSize: 0, color: "var(--text-secondary)", margin: 0 }}>
                London, UK • July 2019 to October 2024
              </Text>
            </Box>
          </Box>
          <Text as="p" sx={{ fontSize: 0, ml: 6, lineHeight: "var(--line-height-relaxed)", color: "var(--text-primary)" }}>
            Transformed the on premises Analytics Infrastructure to a cloud native architecture leveraging Infrastructure as Code. Developed CI/CD pipelines, 
            deployed custom tools on AWS. 
            Migrated applications from Windows to Linux.
          </Text>
        </Box>

        {/* Sony Senior BI Engineer Role */}
        <Box mb={4}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 2 }}>
            <Octicon icon={FeedTagIcon} size={24} sx={{ color: "var(--text-secondary)", mt: 1 }} />
            <Box>
              <Text as="h3" sx={{ fontSize: 1, fontWeight: "var(--font-weight-bold)", margin: 0, color: "var(--accent-primary)" }}>
                Senior Business Intelligence Engineer at Sony Interactive Entertainment
              </Text>
              <Text as="p" sx={{ fontSize: 0, color: "var(--text-secondary)", margin: 0 }}>
                London, UK • August 2016 to July 2019
              </Text>
            </Box>
          </Box>
          <Text as="p" sx={{ fontSize: 0, ml: 6, lineHeight: "var(--line-height-relaxed)", color: "var(--text-primary)" }}>
            Led report and dashboard development, data engineering, and mentored junior developers.
          </Text>
        </Box>

        {/* Novabase Experience Preview */}
        <Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 2 }}>
            <Octicon icon={FeedTagIcon} size={24} sx={{ color: "var(--text-secondary)", mt: 1 }} />
            <Box>
              <Text as="h3" sx={{ fontSize: 1, fontWeight: "var(--font-weight-bold)", margin: 0, color: "var(--accent-primary)" }}>
                Business Intelligence Consultant at Novabase
              </Text>
              <Text as="p" sx={{ fontSize: 0, color: "var(--text-secondary)", margin: 0 }}>
                Multiple countries • 2011-2016
              </Text>
            </Box>
          </Box>
          <Text as="p" sx={{ fontSize: 0, ml: 6, lineHeight: "var(--line-height-relaxed)", color: "var(--text-primary)" }}>
            Worked on multiple Business Intelligence projects across various industries and countries including 
            Vodafone (UK) and Movicel (Angola). Led BI teams, managed reporting platforms, and oversaw ETL development.
          </Text>
        </Box>
      </Box>

      {/* Education & Certifications */}
      <Box width="100%" textAlign="left" mb={4} sx={{ borderTop: "1px solid", borderColor: "var(--border-primary)", pt: 4 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "var(--font-weight-bold)", mb: 3, color: "var(--accent-primary)" }}>
          Education & Certifications
        </Text>
        
        <Box sx={{ display: "grid", gridTemplateColumns: ["1fr", "1fr 1fr"], gap: 3 }}>
          {/* Education */}
          <Box sx={{ p: 2, bg: "var(--bg-secondary)", borderRadius: "var(--radius-md)" }}>
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "var(--font-weight-bold)", mb: 2, margin: 0, color: "var(--accent-primary)" }}>
              Academic Background
            </Text>
            <Text as="p" sx={{ fontSize: 0, mb: 1, margin: 0, color: "var(--text-primary)" }}>
              <strong>ISCTE-IUL (Lisbon, Portugal)</strong>
            </Text>
            <Text as="p" sx={{ fontSize: 0, color: "var(--text-secondary)", margin: 0 }}>
              BSc in Computer Science and Business Administration
            </Text>
          </Box>

          {/* Certifications */}
          <Box sx={{ p: 2, bg: "var(--bg-secondary)", borderRadius: "var(--radius-md)" }}>
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "var(--font-weight-bold)", mb: 2, margin: 0, color: "var(--accent-primary)" }}>
              Professional Certifications
            </Text>
            <Text as="p" sx={{ fontSize: 0, mb: 1, margin: 0, color: "var(--text-primary)" }}>
              ✓ AWS Certified Solutions Architect Associate (2019)
            </Text>
            <Text as="p" sx={{ fontSize: 0, margin: 0, color: "var(--text-primary)" }}>
              ✓ MicroStrategy Certified Engineering Principal (2015)
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Languages Section */}
      <Box width="100%" textAlign="left" mb={4} sx={{ borderTop: "1px solid", borderColor: "var(--border-primary)", pt: 4 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "var(--font-weight-bold)", mb: 2, color: "var(--accent-primary)" }}>
          Languages
        </Text>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ p: 2, bg: "var(--bg-secondary)", borderRadius: "var(--radius-md)", flex: 1 }}>
            <Text as="p" sx={{ fontSize: 0, fontWeight: "var(--font-weight-bold)", margin: 0, color: "var(--accent-primary)" }}>
              English
            </Text>
            <Text as="p" sx={{ fontSize: 0, color: "var(--text-secondary)", margin: 0 }}>
              Fluent
            </Text>
          </Box>
          <Box sx={{ p: 2, bg: "var(--bg-secondary)", borderRadius: "var(--radius-md)", flex: 1 }}>
            <Text as="p" sx={{ fontSize: 0, fontWeight: "var(--font-weight-bold)", margin: 0, color: "var(--accent-primary)" }}>
              Portuguese
            </Text>
            <Text as="p" sx={{ fontSize: 0, color: "var(--text-secondary)", margin: 0 }}>
              Native
            </Text>
          </Box>
        </Box>
      </Box>

      {/* About Section */}
      <Box width="100%" textAlign="left" sx={{ borderTop: "1px solid", borderColor: "var(--border-primary)", pt: 4 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "var(--font-weight-bold)", mb: 2, color: "var(--accent-primary)" }}>
          About This Site
        </Text>
        <Text as="p" sx={{ lineHeight: "var(--line-height-relaxed)", color: "var(--text-primary)", fontFamily: "var(--font-family)" }}>
          Welcome to CarlosDamasio.com!
          This space is meant to be a static website coalescing some information about myself and created mostly for experimentation.
          My linkedin and github accounts together with my cv are the main foundation for the content on this site with some extras to come.
          At the moment I'm based in the UK, specifically in London.
          Feel free to connect via LinkedIn or GitHub!
        </Text>
      </Box>
    </Box>
  );
}
export default Home;
