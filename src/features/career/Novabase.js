import { Octicon, Text, Timeline, Box } from "@primer/react";
import { FeedTagIcon } from "@primer/octicons-react";
import cvData from "../../assets/cv-data.json";
import "../../css/custom.css";

function Novabase() {
  const { experience = [] } = cvData;
  const novabaseRole = experience.find((exp) => exp.companyShort === "Novabase");

  if (!novabaseRole) return <div>No Novabase experience found</div>;

  const formatDate = (startDate, endDate) => {
    const start = new Date(startDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
    const end = endDate
      ? new Date(endDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
        })
      : "present";
    return `${start} – ${end}`;
  };

  return (
    <Box sx={{ p: 4 }}>
      <Text as="h1" sx={{ fontSize: 5, fontWeight: "bold", color: "#58a6ff", mb: 2 }}>
        {novabaseRole.company}
      </Text>
      <Text as="p" sx={{ color: "text.secondary", mb: 6, fontSize: 2 }}>
        {novabaseRole.description}
      </Text>

      <Timeline clipSidebar="true">
        <Timeline.Item>
          <Timeline.Badge>
            <Octicon icon={FeedTagIcon} size={32} color="#58a6ff" />
          </Timeline.Badge>
          <Timeline.Body sx={{ color: "text.primary" }}>
            <Text sx={{ fontWeight: "bold", color: "#58a6ff", fontSize: 3, mb: 1 }}>
              {novabaseRole.jobTitle}
            </Text>
            <Text sx={{ color: "text.secondary", mb: 3, fontSize: 1 }}>
              {novabaseRole.location} • {formatDate(novabaseRole.startDate, novabaseRole.endDate)}
            </Text>

            {novabaseRole.responsibilities && novabaseRole.responsibilities.length > 0 && (
              <Box sx={{ mb: 4 }}>
                <Text sx={{ fontWeight: "bold", color: "#8b949e", mb: 2, fontSize: 1 }}>
                  Key Projects & Responsibilities
                </Text>
                <ul style={{ color: "var(--color-text-secondary)", paddingLeft: "20px" }}>
                  {novabaseRole.responsibilities.map((resp, i) => (
                    <li key={i} style={{ marginBottom: "12px", lineHeight: "1.6" }}>
                      {resp}
                    </li>
                  ))}
                </ul>
              </Box>
            )}

            {novabaseRole.achievements && novabaseRole.achievements.length > 0 && (
              <Box sx={{ mb: 4 }}>
                <Text sx={{ fontWeight: "bold", color: "#238636", mb: 2, fontSize: 1 }}>
                  Key Achievements
                </Text>
                <ul style={{ color: "var(--color-text-secondary)", paddingLeft: "20px" }}>
                  {novabaseRole.achievements.map((achievement, i) => (
                    <li key={i} style={{ marginBottom: "8px" }}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </Box>
            )}

            {novabaseRole.technologies && novabaseRole.technologies.length > 0 && (
              <Box>
                <Text sx={{ fontWeight: "bold", color: "#8b949e", mb: 2, fontSize: 1 }}>
                  Technologies
                </Text>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {novabaseRole.technologies.map((tech, i) => (
                    <Text
                      key={i}
                      sx={{
                        bg: "#21262d",
                        color: "#58a6ff",
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        fontSize: 0,
                        border: "1px solid #30363d",
                      }}
                    >
                      {tech}
                    </Text>
                  ))}
                </Box>
              </Box>
            )}
          </Timeline.Body>
        </Timeline.Item>
      </Timeline>
    </Box>
  );
}

export default Novabase;
