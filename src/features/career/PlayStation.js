import { Octicon, Text, Timeline, Box } from "@primer/react";
import { FeedTagIcon } from "@primer/octicons-react";
import cvData from "../../assets/cv-data.json";
import "../../css/custom.css";

function PlayStation() {
  const { experience = [] } = cvData;
  const sonyRoles = experience.filter((exp) => exp.companyShort === "Sony");

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
        Sony Interactive Entertainment Europe
      </Text>
      <Text as="p" sx={{ color: "text.secondary", mb: 6 }}>
        Analytics Infrastructure & Business Intelligence
      </Text>

      <Timeline clipSidebar="true">
        {sonyRoles.map((role, idx) => (
          <Timeline.Item key={idx}>
            <Timeline.Badge>
              <Octicon
                icon={FeedTagIcon}
                size={32}
                color={role.isCurrentRole ? "#238636" : "#58a6ff"}
              />
            </Timeline.Badge>
            <Timeline.Body sx={{ color: "text.primary" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                <Text sx={{ fontWeight: "bold", color: "#58a6ff", fontSize: 3 }}>
                  {role.jobTitle}
                </Text>
                {role.isCurrentRole && (
                  <Text
                    sx={{
                      bg: "#238636",
                      color: "#ffffff",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      fontSize: 0,
                      fontWeight: "bold",
                    }}
                  >
                    Current
                  </Text>
                )}
              </Box>
              <Text sx={{ color: "text.secondary", mb: 2, fontSize: 1 }}>
                {role.location} • {formatDate(role.startDate, role.endDate)}
              </Text>
              <Text sx={{ color: "text.primary", mb: 3 }}>
                {role.description}
              </Text>

              {role.responsibilities && role.responsibilities.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Text sx={{ fontWeight: "bold", color: "#8b949e", mb: 2 }}>
                    Responsibilities
                  </Text>
                  <ul style={{ color: "var(--color-text-secondary)", paddingLeft: "20px" }}>
                    {role.responsibilities.slice(0, 4).map((resp, i) => (
                      <li key={i} style={{ marginBottom: "8px" }}>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </Box>
              )}

              {role.technologies && role.technologies.length > 0 && (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {role.technologies.slice(0, 8).map((tech, i) => (
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
              )}
            </Timeline.Body>
          </Timeline.Item>
        ))}
      </Timeline>
    </Box>
  );
}

export default PlayStation;
