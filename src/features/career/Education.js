import { Octicon, Text, Timeline, Box } from "@primer/react";
import "../../css/custom.css";
import { FeedTagIcon } from "@primer/octicons-react";
import Divider from "../../components/Divider";
import cvData from "../../data/cv-data.json";

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
      <Text as="h1" sx={{ fontSize: 5, fontWeight: "var(--font-weight-bold)", color: "var(--accent-primary)", mb: 2 }}>
        Education & Certifications
      </Text>

      <Box sx={{ mb: 6 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "var(--font-weight-bold)", color: "var(--accent-primary)", mb: 4 }}>
          Academic Qualifications
        </Text>
        <Timeline clipSidebar="true">
          {education.map((edu, idx) => (
            <Timeline.Item key={idx}>
              <Timeline.Badge>
                <Octicon icon={FeedTagIcon} size={32} color="var(--accent-primary)" />
              </Timeline.Badge>
              <Timeline.Body sx={{ color: "var(--text-primary)" }}>
                <Text sx={{ fontWeight: "var(--font-weight-bold)", color: "var(--accent-primary)", fontSize: 2, mb: 1 }}>
                  {edu.degree}
                </Text>
                <p>
                <Text sx={{ color: "var(--text-secondary)", mb: 2, fontSize: 1 }}>
                  {edu.institution}  {edu.location} • Graduated {formatDate(edu.graduationDate)}
                </Text>
                </p>
              </Timeline.Body>
            </Timeline.Item>
          ))}
        </Timeline>
      </Box>

      <Divider />

      <Box sx={{ mt: 6 }}>
        <Text as="h2" sx={{ fontSize: 3, fontWeight: "var(--font-weight-bold)", color: "var(--accent-primary)", mb: 4 }}>
          Professional Certifications
        </Text>
        <Timeline clipSidebar="true">
          {certifications.map((cert, idx) => (
            <Timeline.Item key={idx}>
              <Timeline.Badge>
                <Octicon icon={FeedTagIcon} size={32} color="var(--accent-primary)" />
              </Timeline.Badge>
              <Timeline.Body sx={{ color: "var(--text-primary)" }}>
                <Text sx={{ fontWeight: "var(--font-weight-bold)", color: "var(--accent-primary)", fontSize: 2, mb: 1 }}>
                  {cert.name}
                </Text>
                <p>
                <Text sx={{ color: "var(--text-secondary)", mb: 2, fontSize: 1 }}>
                  {cert.issuer} Issued {formatDate(cert.date)}
                </Text>
                </p>
              </Timeline.Body>
            </Timeline.Item>
          ))}
        </Timeline>
      </Box>
    </Box>
  );
}

export default Education;
