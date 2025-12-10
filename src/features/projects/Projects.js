import { Box, Text, Button, Link } from "@primer/react";
import { Octicon } from "@primer/react";
import { FeedTagIcon } from "@primer/octicons-react";
import cvData from "../../assets/cv-data.json";

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
          Professional Experience
        </Text>
        <Text as="p" sx={{ fontSize: 1, color: "text.secondary", margin: 0, mt: 1 }}>
          Career highlights and key achievements across multiple organizations and countries
        </Text>
      </Box>

      {/* Professional Experience Timeline */}
      <Box width="100%" mb={4}>
        {cvData.experience && cvData.experience.length > 0 ? (
          cvData.experience.map((role, idx) => (
            <Box
              key={idx}
              mb={4}
              sx={{
                borderLeft: "2px solid",
                borderColor: role.isCurrentRole ? "accent.fg" : "border.default",
                pl: 3,
              }}
            >
              {/* Role Header */}
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 2 }}>
                <Octicon
                  icon={FeedTagIcon}
                  size={24}
                  sx={{
                    color: role.isCurrentRole ? "accent.fg" : "text.secondary",
                    mt: 0.5,
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Text as="h3" sx={{ fontSize: 2, fontWeight: "bold", margin: 0 }}>
                    {role.company}
                  </Text>
                  <Text as="p" sx={{ fontSize: 0, color: "text.secondary", margin: 0 }}>
                    {role.location} • {role.jobTitle}
                  </Text>
                  <Text as="p" sx={{ fontSize: 0, color: "text.muted", margin: 0, mt: 0.5 }}>
                    {new Date(role.startDate).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    {role.isCurrentRole
                      ? "Present"
                      : new Date(role.endDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                  </Text>
                </Box>
                {role.isCurrentRole && (
                  <Box
                    sx={{
                      bg: "accent.fg",
                      color: "canvas.default",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      fontSize: 0,
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Current
                  </Box>
                )}
              </Box>

              {/* Role Description */}
              <Text as="p" sx={{ fontSize: 0, lineHeight: 1.6, mb: 2 }}>
                {role.description}
              </Text>

              {/* Responsibilities */}
              <Box mb={2}>
                <Text as="h4" sx={{ fontSize: 0, fontWeight: "bold", mb: 1 }}>
                  Key Responsibilities:
                </Text>
                <Box
                  as="ul"
                  sx={{
                    margin: 0,
                    paddingLeft: "1.25rem",
                    fontSize: 0,
                    color: "text.secondary",
                  }}
                >
                  {role.responsibilities?.slice(0, 4).map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </Box>
              </Box>

              {/* Achievements */}
              <Box mb={2}>
                <Text as="h4" sx={{ fontSize: 0, fontWeight: "bold", mb: 1 }}>
                  Key Achievements:
                </Text>
                <Box
                  as="ul"
                  sx={{
                    margin: 0,
                    paddingLeft: "1.25rem",
                    fontSize: 0,
                    color: "text.secondary",
                  }}
                >
                  {role.achievements?.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </Box>
              </Box>

              {/* Technologies */}
              <Box>
                <Text as="h4" sx={{ fontSize: 0, fontWeight: "bold", mb: 1 }}>
                  Technologies:
                </Text>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {role.technologies?.map((tech, i) => (
                    <Box
                      key={i}
                      sx={{
                        bg: "canvas.subtle",
                        color: "text.secondary",
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        fontSize: 0,
                        border: "1px solid",
                        borderColor: "border.default",
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))
        ) : (
          <Box
            sx={{
              p: 4,
              bg: "canvas.subtle",
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Text as="p" sx={{ color: "text.secondary" }}>
              No experience data available.
            </Text>
          </Box>
        )}
      </Box>

      {/* Skills & Technologies Summary */}
      <Box width="100%" mb={4} sx={{ borderTop: "1px solid", borderColor: "border.default", pt: 4 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 3 }}>
          Technical Expertise
        </Text>

        <Box sx={{ display: "grid", gridTemplateColumns: ["1fr", "1fr 1fr"], gap: 3 }}>
          {/* Languages */}
          <Box>
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 2 }}>
              Programming Languages
            </Text>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {cvData.skills?.languages?.map((lang, i) => (
                <Box key={i} sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Text as="span" sx={{ fontSize: 0 }}>
                    {lang.name}
                  </Text>
                  <Text as="span" sx={{ fontSize: 0, color: "text.secondary" }}>
                    {lang.proficiency}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Platforms */}
          <Box>
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 2 }}>
              Platforms & Tools
            </Text>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {cvData.skills?.platforms?.slice(0, 5).map((platform, i) => (
                <Box key={i} sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Text as="span" sx={{ fontSize: 0 }}>
                    {platform.name}
                  </Text>
                  <Text as="span" sx={{ fontSize: 0, color: "text.secondary" }}>
                    {platform.proficiency}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Tools */}
          <Box>
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 2 }}>
              DevOps & Infrastructure
            </Text>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {cvData.skills?.tools?.slice(0, 5).map((tool, i) => (
                <Box key={i} sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Text as="span" sx={{ fontSize: 0 }}>
                    {tool.name}
                  </Text>
                  <Text as="span" sx={{ fontSize: 0, color: "text.secondary" }}>
                    {tool.proficiency}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Soft Skills */}
          <Box>
            <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 2 }}>
              Professional Skills
            </Text>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {cvData.skills?.soft_skills?.map((skill, i) => (
                <Box
                  key={i}
                  sx={{
                    bg: "canvas.subtle",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: 0,
                    border: "1px solid",
                    borderColor: "border.default",
                  }}
                >
                  {skill}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Certifications */}
      <Box width="100%" mb={4} sx={{ borderTop: "1px solid", borderColor: "border.default", pt: 4 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 3 }}>
          Certifications
        </Text>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {cvData.certifications?.map((cert, idx) => (
            <Box
              key={idx}
              sx={{
                p: 2,
                bg: "canvas.subtle",
                borderRadius: 2,
                border: "1px solid",
                borderColor: "border.default",
              }}
            >
              <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", margin: 0 }}>
                {cert.name}
              </Text>
              <Text as="p" sx={{ fontSize: 0, color: "text.secondary", margin: 0 }}>
                {cert.issuer} •{" "}
                {new Date(cert.date).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </Text>
            </Box>
          ))}
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
          Ready to Collaborate?
        </Text>
        <Text as="p" sx={{ fontSize: 1, color: "text.secondary", mb: 3 }}>
          Let's discuss how I can contribute to your team or project
        </Text>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button as={Link} href="mailto:carlosadamasio@gmail.com" variant="primary">
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
