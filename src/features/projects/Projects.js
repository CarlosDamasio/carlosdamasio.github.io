import { Box, Text, Button, Link } from "@primer/react";
import { Octicon } from "@primer/react";
import { FeedTagIcon } from "@primer/octicons-react";
import projectsData from "../../assets/projects-data.json";
import ProjectCard from "../../components/ProjectCard";

function Projects() {
  return (
    <Box
      flexDirection="column"
      alignItems="stretch"
      width="100%"
      sx={{ overflow: "auto" }}
    >
      {/* Header */}
      <Box width="100%" mb={4}>
        <Text as="h1" sx={{ fontSize: 5, fontWeight: "bold", margin: 0 }}>
          Projects & Professional Experience
        </Text>
        <Text as="p" sx={{ fontSize: 1, color: "text.secondary", margin: 0, mt: 1 }}>
          Showcase of work across multiple companies, industries, and countries
        </Text>
      </Box>

      {/* Projects Grid */}
      <Box
        width="100%"
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "1fr 1fr"],
          gap: 3,
          mb: 4,
        }}
      >
        {projectsData.projects && projectsData.projects.length > 0 ? (
          projectsData.projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))
        ) : (
          <Box
            sx={{
              gridColumn: ["1", "1 / -1"],
              p: 4,
              bg: "canvas.subtle",
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Text as="p" sx={{ color: "text.secondary" }}>
              Projects data is being populated. Check back soon!
            </Text>
          </Box>
        )}
      </Box>

      {/* Professional Experience Timeline */}
      <Box width="100%" mb={4}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 3 }}>
          Professional Work Experience
        </Text>

        {/* Sony PlayStation */}
        <Box mb={4} sx={{ borderLeft: "4px solid", borderColor: "accent.fg", pl: 3 }}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 2 }}>
            <Octicon icon={FeedTagIcon} size={24} sx={{ color: "accent.fg", mt: 0.5 }} />
            <Box sx={{ flex: 1 }}>
              <Text as="h3" sx={{ fontSize: 2, fontWeight: "bold", margin: 0 }}>
                Sony PlayStation
              </Text>
              <Text as="p" sx={{ fontSize: 0, color: "text.secondary", margin: 0 }}>
                London, UK • Analytics Platform Team
              </Text>
            </Box>
          </Box>

          {/* Current Role */}
          <Box mb={3} sx={{ p: 2, bg: "canvas.subtle", borderRadius: 2 }}>
            <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", mb: 1, margin: 0 }}>
              Senior Platform Engineer (July 2019 - Present)
            </Text>
            <Text as="p" sx={{ fontSize: 0, lineHeight: 1.6 }}>
              Working as Senior Platform Engineer for the Analytics Platform team, focusing on hosting, 
              managing and enhancing our Analytics tools stacks such as MicroStrategy, Tableau and Snowflake. 
              Lead platform infrastructure initiatives, optimize tooling, and mentor team members on best practices.
            </Text>
          </Box>

          {/* Previous Role */}
          <Box sx={{ p: 2, bg: "canvas.subtle", borderRadius: 2 }}>
            <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", mb: 1, margin: 0 }}>
              Senior Business Intelligence Engineer (August 2016 - July 2019)
            </Text>
            <Text as="p" sx={{ fontSize: 0, lineHeight: 1.6 }}>
              Developed dashboards and reporting solutions, built robust data pipelines and data structures. 
              Mentored business users on extracting maximum value from team products and managed business 
              requirements for continuous platform enhancements.
            </Text>
          </Box>
        </Box>

        {/* Novabase */}
        <Box mb={4} sx={{ borderLeft: "4px solid", borderColor: "warning.fg", pl: 3 }}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 2 }}>
            <Octicon icon={FeedTagIcon} size={24} sx={{ color: "warning.fg", mt: 0.5 }} />
            <Box sx={{ flex: 1 }}>
              <Text as="h3" sx={{ fontSize: 2, fontWeight: "bold", margin: 0 }}>
                Novabase
              </Text>
              <Text as="p" sx={{ fontSize: 0, color: "text.secondary", margin: 0 }}>
                Multiple countries • Various industries
              </Text>
            </Box>
          </Box>

          <Text as="p" sx={{ fontSize: 0, mb: 2, lineHeight: 1.6 }}>
            Worked on multiple Business Intelligence projects across various industries and countries. 
            Led BI teams, designed and implemented data solutions, and managed Analytics platforms.
          </Text>

          {/* Vodafone Project */}
          <Box mb={2} sx={{ p: 2, bg: "canvas.subtle", borderRadius: 2 }}>
            <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", mb: 1, margin: 0 }}>
              🏢 Vodafone Group (Telecom Company, UK)
            </Text>
            <Text as="p" sx={{ fontSize: 0, lineHeight: 1.6 }}>
              Developed comprehensive Data Warehouse Group Solution. As part of the ETL team, led ETL development, 
              managed task estimation, and validated work quality from junior developers. Architected scalable 
              data pipelines supporting enterprise analytics.
            </Text>
          </Box>

          {/* Movicel Project */}
          <Box sx={{ p: 2, bg: "canvas.subtle", borderRadius: 2 }}>
            <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", mb: 1, margin: 0 }}>
              📱 Movicel (Telecom Company, Angola)
            </Text>
            <Text as="p" sx={{ fontSize: 0, lineHeight: 1.6 }}>
              Managed the Reporting Team overseeing reports and dashboards development, server and tool 
              administration. Specified Analytics Platform roadmap, designed development processes, trained 
              business users and developers, and served as focal point for MicroStrategy product assessments.
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Skills & Technologies */}
      <Box width="100%" mb={4} sx={{ borderTop: "1px solid", borderColor: "border.default", pt: 4 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 3 }}>
          Technical Expertise
        </Text>
        <Box sx={{ display: "grid", gridTemplateColumns: ["1fr", "1fr 1fr"], gap: 3 }}>
          <Box>
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 2 }}>
              Analytics & BI Tools
            </Text>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {["MicroStrategy", "Tableau", "Snowflake", "AWS", "ETL"].map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    bg: "canvas.subtle",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: 0,
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 2 }}>
              Data Engineering
            </Text>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {["Data Pipelines", "Data Warehouses", "SQL", "Python", "Reporting"].map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    bg: "canvas.subtle",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: 0,
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 2 }}>
              Cloud Platforms
            </Text>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {["AWS", "Google Cloud", "Data Infrastructure", "Cloud Architecture"].map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    bg: "canvas.subtle",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: 0,
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 2 }}>
              Professional Skills
            </Text>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {["Team Leadership", "Mentoring", "Architecture Design", "Platform Management"].map((skill) => (
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
        </Box>
      </Box>

      {/* Industries & Geographies */}
      <Box width="100%" mb={4} sx={{ borderTop: "1px solid", borderColor: "border.default", pt: 4 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 3 }}>
          Industries & Geographic Experience
        </Text>
        <Box sx={{ display: "grid", gridTemplateColumns: ["1fr", "1fr 1fr"], gap: 3 }}>
          <Box sx={{ p: 3, bg: "canvas.subtle", borderRadius: 2 }}>
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 1 }}>
              Industries
            </Text>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px" }}>
              <li>Telecommunications (Vodafone, Movicel)</li>
              <li>Gaming (Sony PlayStation)</li>
              <li>Public Administration</li>
              <li>Enterprise Analytics</li>
            </ul>
          </Box>

          <Box sx={{ p: 3, bg: "canvas.subtle", borderRadius: 2 }}>
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 1 }}>
              Geographic Coverage
            </Text>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px" }}>
              <li>🇬🇧 United Kingdom (Current Base)</li>
              <li>🇵🇹 Portugal</li>
              <li>🇦🇴 Angola</li>
              <li>🇧🇷 Brazil</li>
            </ul>
          </Box>
        </Box>
      </Box>

      {/* Certifications */}
      <Box width="100%" mb={4} sx={{ borderTop: "1px solid", borderColor: "border.default", pt: 4 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 3 }}>
          Certifications
        </Text>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ p: 2, bg: "canvas.subtle", borderRadius: 2 }}>
            <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", margin: 0 }}>
              AWS Certified Solutions Architect Associate
            </Text>
            <Text as="p" sx={{ fontSize: 0, color: "text.secondary", margin: 0 }}>
              Amazon Web Services • 2019
            </Text>
          </Box>
          <Box sx={{ p: 2, bg: "canvas.subtle", borderRadius: 2 }}>
            <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", margin: 0 }}>
              MicroStrategy Certified Engineering Principal
            </Text>
            <Text as="p" sx={{ fontSize: 0, color: "text.secondary", margin: 0 }}>
              MicroStrategy • 2015
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Call to Action */}
      <Box
        width="100%"
        sx={{
          borderTop: "1px solid",
          borderColor: "border.default",
          pt: 4,
          mt: 4,
          textAlign: "center",
        }}
      >
        <Text as="h2" sx={{ fontSize: 2, fontWeight: "bold", mb: 2 }}>
          Let's Work Together
        </Text>
        <Text as="p" sx={{ fontSize: 1, color: "text.secondary", mb: 3 }}>
          Interested in discussing Analytics platforms, Business Intelligence solutions, or Data engineering projects?
        </Text>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button
            as={Link}
            href="mailto:carlos@carlosdamasio.com"
            variant="primary"
          >
            Email Me
          </Button>
          <Button
            as={Link}
            href="https://linkedin.com/in/cdamasio19"
            target="_blank"
            rel="noopener noreferrer"
            variant="default"
          >
            LinkedIn
          </Button>
          <Button
            as={Link}
            href="https://github.com/CarlosDamasio"
            target="_blank"
            rel="noopener noreferrer"
            variant="default"
          >
            GitHub
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
