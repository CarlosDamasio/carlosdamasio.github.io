import { Box, Text, Button, Link } from "@primer/react";
import { DownloadIcon } from "@primer/octicons-react";
import cvData from "../../assets/cv-data.json";
import ExperienceEntry from "../../components/ExperienceEntry";

function CV() {
  // Handle PDF download
  const handleDownloadCV = () => {
    // If you have a PDF file, uncomment and adjust the path:
    // const link = document.createElement("a");
    // link.href = "/path/to/resume.pdf";
    // link.download = "Carlos_Damasio_CV.pdf";
    // link.click();
    
    // For now, link to the CV file in the header
    alert("CV download feature coming soon. Please use the CV link in the header.");
  };

  return (
    <Box
      flexDirection="column"
      alignItems="stretch"
      width="100%"
      sx={{ overflow: "auto" }}
    >
      {/* Header with Download Button */}
      <Box
        width="100%"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          pb: 3,
          borderBottom: "1px solid",
          borderColor: "border.default",
        }}
      >
        <Box>
          <Text as="h1" sx={{ fontSize: 5, fontWeight: "bold", margin: 0 }}>
            Curriculum Vitae
          </Text>
          <Text as="p" sx={{ fontSize: 1, color: "text.secondary", margin: 0, mt: 1 }}>
            Professional Background & Expertise
          </Text>
        </Box>
        <Button
          onClick={handleDownloadCV}
          variant="primary"
          leadingVisual={DownloadIcon}
        >
          Download PDF
        </Button>
      </Box>

      {/* Professional Summary */}
      <Box width="100%" mb={4}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 2 }}>
          Professional Summary
        </Text>
        <Text as="p" sx={{ fontSize: 1, lineHeight: 1.6, color: "text.primary" }}>
          {cvData.professionalSummary}
        </Text>
      </Box>

      {/* Experience Section */}
      <Box width="100%" mb={4}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 3 }}>
          Work Experience
        </Text>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {cvData.experience.map((exp, idx) => (
            <ExperienceEntry key={idx} experience={exp} />
          ))}
        </Box>
      </Box>

      {/* Education Section */}
      <Box width="100%" mb={4}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 3 }}>
          Education
        </Text>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {cvData.education.map((edu, idx) => (
            <Box
              key={idx}
              sx={{
                p: 3,
                bg: "canvas.subtle",
                borderRadius: 2,
                borderLeft: "4px solid",
                borderColor: "accent.fg",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  mb: 1,
                }}
              >
                <Box>
                  <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", margin: 0 }}>
                    {edu.degree}
                  </Text>
                  <Text as="p" sx={{ color: "text.secondary", fontSize: 0, margin: 0 }}>
                    {edu.institution}
                  </Text>
                </Box>
                <Text as="p" sx={{ fontSize: 0, color: "text.secondary", margin: 0 }}>
                  {new Date(edu.graduationDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </Text>
              </Box>
              {edu.description && (
                <Text as="p" sx={{ fontSize: 0, mt: 2, lineHeight: 1.5 }}>
                  {edu.description}
                </Text>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Skills Section */}
      <Box width="100%" mb={4}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 3 }}>
          Skills & Expertise
        </Text>

        {/* Languages */}
        <Box mb={3}>
          <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 2 }}>
            Programming Languages
          </Text>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {cvData.skills.languages.map((skill) => (
              <Box
                key={skill}
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

        {/* Platforms */}
        <Box mb={3}>
          <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 2 }}>
            Cloud Platforms & Infrastructure
          </Text>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {cvData.skills.platforms.map((skill) => (
              <Box
                key={skill}
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

        {/* Tools */}
        <Box mb={3}>
          <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 2 }}>
            Tools & Technologies
          </Text>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {cvData.skills.tools.map((skill) => (
              <Box
                key={skill}
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

        {/* Soft Skills */}
        <Box>
          <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", mb: 2 }}>
            Professional Competencies
          </Text>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {cvData.skills.soft_skills.map((skill) => (
              <Box
                key={skill}
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

      {/* Certifications Section */}
      {cvData.certifications && cvData.certifications.length > 0 && (
        <Box width="100%" mb={4}>
          <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 3 }}>
            Certifications
          </Text>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {cvData.certifications.map((cert, idx) => (
              <Box
                key={idx}
                sx={{
                  p: 3,
                  bg: "canvas.subtle",
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "border.default",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                  }}
                >
                  <Box>
                    <Text as="h3" sx={{ fontSize: 1, fontWeight: "bold", margin: 0 }}>
                      {cert.name}
                    </Text>
                    <Text as="p" sx={{ color: "text.secondary", fontSize: 0, margin: 0 }}>
                      {cert.issuer}
                    </Text>
                    {cert.credentialId && (
                      <Text as="p" sx={{ color: "text.secondary", fontSize: 0, margin: 0 }}>
                        ID: {cert.credentialId}
                      </Text>
                    )}
                  </Box>
                  <Box sx={{ textAlign: "right" }}>
                    <Text as="p" sx={{ fontSize: 0, color: "text.secondary", margin: 0 }}>
                      Issued:{" "}
                      {new Date(cert.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </Text>
                    {cert.expiryDate && (
                      <Text
                        as="p"
                        sx={{
                          fontSize: 0,
                          color:
                            new Date(cert.expiryDate) < new Date()
                              ? "danger.fg"
                              : "text.secondary",
                          margin: 0,
                        }}
                      >
                        Expires:{" "}
                        {new Date(cert.expiryDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}
                      </Text>
                    )}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Languages Section */}
      {cvData.languages && cvData.languages.length > 0 && (
        <Box width="100%" mb={4}>
          <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 3 }}>
            Languages
          </Text>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {cvData.languages.map((lang, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 2,
                  bg: "canvas.subtle",
                  borderRadius: 2,
                }}
              >
                <Text as="p" sx={{ fontSize: 0, fontWeight: "bold", margin: 0 }}>
                  {lang.language}
                </Text>
                <Text as="p" sx={{ fontSize: 0, color: "text.secondary", margin: 0 }}>
                  {lang.proficiency}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Contact Section */}
      <Box
        width="100%"
        sx={{
          borderTop: "1px solid",
          borderColor: "border.default",
          pt: 4,
          mt: 4,
        }}
      >
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "bold", mb: 3 }}>
          Get In Touch
        </Text>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {cvData.contact.email && (
            <Button
              as={Link}
              href={`mailto:${cvData.contact.email}`}
              variant="primary"
            >
              Email
            </Button>
          )}
          {cvData.contact.linkedin && (
            <Button
              as={Link}
              href={cvData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
            >
              LinkedIn
            </Button>
          )}
          {cvData.contact.github && (
            <Button
              as={Link}
              href={cvData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
            >
              GitHub
            </Button>
          )}
          {cvData.contact.website && (
            <Button
              as={Link}
              href={cvData.contact.website}
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
            >
              Website
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default CV;
