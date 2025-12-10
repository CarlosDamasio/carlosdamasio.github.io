import { Octicon, Text, Timeline, Box } from "@primer/react";
import "../../css/custom.css";
import { FeedTagIcon } from "@primer/octicons-react";
import Divider from "../../components/Divider";
import cvData from "../../assets/cv-data.json";

function Education() {
  const { education = [], certifications = [] } = cvData;

  const formatDate = (dateString) => {
    if (!dateString) return "Present";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Text as="h2" sx={{ fontSize: 5, fontWeight: "bold", color: "#58a6ff", mb: 4 }}>
          Academic Qualifications
        </Text>
        <Timeline clipSidebar="true">
          {education.map((edu, idx) => (
            <Timeline.Item key={idx}>
              <Timeline.Badge>
                <Octicon icon={FeedTagIcon} size={32} color="#58a6ff" />
              </Timeline.Badge>
              <Timeline.Body sx={{ color: "text.primary" }}>
                <Text sx={{ fontWeight: "bold", color: "#58a6ff", mb: 1 }}>
                  {edu.degree}
                </Text>
                <Text sx={{ color: "text.secondary", mb: 1 }}>
                  {edu.institution}
                </Text>
                <Text sx={{ color: "text.secondary", fontSize: 0 }}>
                  {edu.location} • Graduated {formatDate(edu.graduationDate)}
                </Text>
              </Timeline.Body>
            </Timeline.Item>
          ))}
        </Timeline>
      </Box>

      <Divider />

      <Box sx={{ mt: 6 }}>
        <Text as="h2" sx={{ fontSize: 5, fontWeight: "bold", color: "#58a6ff", mb: 4 }}>
          Certifications
        </Text>
        <Timeline clipSidebar="true">
          {certifications.map((cert, idx) => (
            <Timeline.Item key={idx}>
              <Timeline.Badge>
                <Octicon icon={FeedTagIcon} size={32} color="#238636" />
              </Timeline.Badge>
              <Timeline.Body sx={{ color: "text.primary" }}>
                <Text sx={{ fontWeight: "bold", color: "#238636", mb: 1 }}>
                  {cert.name}
                </Text>
                <Text sx={{ color: "text.secondary", mb: 1 }}>
                  {cert.issuer}
                </Text>
                <Text sx={{ color: "text.secondary", fontSize: 0 }}>
                  Issued {formatDate(cert.date)}
                  {cert.expiryDate && ` • Expires ${formatDate(cert.expiryDate)}`}
                </Text>
              </Timeline.Body>
            </Timeline.Item>
          ))}
        </Timeline>
      </Box>
    </Box>
  );
}

export default Education;
