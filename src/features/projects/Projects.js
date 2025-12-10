import { Box, Text, Button, Link } from "@primer/react";
import { ExternalLink } from "@primer/octicons-react";
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
          Projects & Portfolio
        </Text>
        <Text as="p" sx={{ fontSize: 1, color: "text.secondary", margin: 0, mt: 1 }}>
          Showcase of professional work and technical achievements
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

      {/* Work Experience Projects Section */}
      <Box width="100%" mb={4}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 3 }}>
          Key Work Achievements
        </Text>
        <Text as="p" sx={{ fontSize: 1, color: "text.secondary", mb: 3 }}>
          Below are highlights from my professional roles and the impact delivered:
        </Text>

        {/* PlayStation Section */}
        <Box mb={4}>
          <Text as="h3" sx={{ fontSize: 2, fontWeight: "bold", mb: 2 }}>
            PlayStation - Senior Platform Engineer
          </Text>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ p: 3, bg: "canvas.subtle", borderRadius: 2 }}>
              <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", mb: 1 }}>
                Microservices Infrastructure & Kubernetes Orchestration
              </Text>
              <Text as="p" sx={{ fontSize: 0, color: "text.secondary", mb: 2 }}>
                2021 - 2023
              </Text>
              <Text as="p" sx={{ fontSize: 0, mb: 2 }}>
                Architected and deployed microservices infrastructure using Kubernetes
                across multiple environments, enabling scalable and reliable platform services.
              </Text>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {["Kubernetes", "AWS", "Docker", "Terraform", "Python"].map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      bg: "accent.subtle",
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

            <Box sx={{ p: 3, bg: "canvas.subtle", borderRadius: 2 }}>
              <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", mb: 1 }}>
                CI/CD Pipeline Optimization & Deployment Automation
              </Text>
              <Text as="p" sx={{ fontSize: 0, mb: 2 }}>
                Reduced deployment time by 60% through comprehensive CI/CD pipeline
                optimization, enabling faster iteration and more frequent releases.
              </Text>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {["Jenkins", "GitHub Actions", "AWS", "Terraform"].map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      bg: "accent.subtle",
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

            <Box sx={{ p: 3, bg: "canvas.subtle", borderRadius: 2 }}>
              <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", mb: 1 }}>
                Team Leadership & Engineering Culture
              </Text>
              <Text as="p" sx={{ fontSize: 0, mb: 2 }}>
                Mentored 3 junior engineers on DevOps best practices, led hiring initiatives,
                and successfully onboarded 5 new team members while maintaining 99.95%
                infrastructure uptime.
              </Text>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {["Technical Leadership", "Mentoring", "Team Growth"].map((skill) => (
                  <Box
                    key={skill}
                    sx={{
                      bg: "accent.subtle",
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

        {/* Novabase Section */}
        <Box>
          <Text as="h3" sx={{ fontSize: 2, fontWeight: "bold", mb: 2 }}>
            Novabase - Platform Engineer
          </Text>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ p: 3, bg: "canvas.subtle", borderRadius: 2 }}>
              <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", mb: 1 }}>
                CI/CD Pipeline Design & Implementation
              </Text>
              <Text as="p" sx={{ fontSize: 0, mb: 2 }}>
                Designed and implemented comprehensive CI/CD pipelines, establishing
                DevOps best practices and documentation for a growing startup.
              </Text>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {["GitLab CI", "Docker", "PostgreSQL", "Linux"].map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      bg: "accent.subtle",
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

            <Box sx={{ p: 3, bg: "canvas.subtle", borderRadius: 2 }}>
              <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", mb: 1 }}>
                Monitoring & Observability Infrastructure
              </Text>
              <Text as="p" sx={{ fontSize: 0, mb: 2 }}>
                Set up comprehensive monitoring and observability infrastructure,
                reducing incident response time by 50% and enabling proactive issue detection.
              </Text>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {["Prometheus", "ELK Stack", "Grafana", "DataDog"].map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      bg: "accent.subtle",
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

            <Box sx={{ p: 3, bg: "canvas.subtle", borderRadius: 2 }}>
              <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", mb: 1 }}>
                Operations Automation
              </Text>
              <Text as="p" sx={{ fontSize: 0, mb: 2 }}>
                Automated 80% of manual operations through infrastructure-as-code and
                deployment automation, enabling zero-downtime deployment strategies.
              </Text>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {["Terraform", "Ansible", "Bash", "Python"].map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      bg: "accent.subtle",
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
          </Box>
        </Box>
      </Box>

      {/* Skills Summary */}
      <Box
        width="100%"
        sx={{
          borderTop: "1px solid",
          borderColor: "border.default",
          pt: 4,
          mt: 4,
        }}
      >
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 2 }}>
          Technologies Demonstrated
        </Text>
        <Box sx={{ display: "grid", gridTemplateColumns: ["1fr", "1fr 1fr"], gap: 3 }}>
          <Box>
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 1 }}>
              Cloud & Infrastructure
            </Text>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {["Kubernetes", "AWS", "GCP", "Docker", "Terraform"].map((tech) => (
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
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 1 }}>
              DevOps & Automation
            </Text>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {["Jenkins", "GitLab CI", "GitHub Actions", "Ansible", "Bash"].map((tech) => (
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
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 1 }}>
              Programming Languages
            </Text>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {["Python", "Go", "Bash", "JavaScript"].map((tech) => (
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
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 1 }}>
              Monitoring & Observability
            </Text>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {["Prometheus", "ELK Stack", "Grafana", "DataDog"].map((tech) => (
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
          Interested in Collaborating?
        </Text>
        <Text as="p" sx={{ fontSize: 1, color: "text.secondary", mb: 3 }}>
          Let's discuss how I can contribute to your team or project.
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
            href="https://linkedin.com/in/carlosdamasio"
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
