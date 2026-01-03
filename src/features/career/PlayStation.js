import { Octicon, Text, Timeline, Box } from "@primer/react";
import { FeedTagIcon } from "@primer/octicons-react";
import cvData from "../../data/cv-data.json";
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
      <Text as="h1" sx={{ fontSize: 5, fontWeight: "var(--font-weight-bold)", color: "var(--accent-primary)", mb: 2 }}>
        Sony Interactive Entertainment Europe
      </Text>
      <Text as="p" sx={{ color: "var(--text-secondary)", mb: 6 }}>
        Analytics Infrastructure & Business Intelligence
      </Text>

      <Timeline clipSidebar="true">
        {sonyRoles.map((role, idx) => (
          <Timeline.Item key={idx}>
            <Timeline.Badge>
              <Octicon
                icon={FeedTagIcon}
                size={32}
                color={role.isCurrentRole ? "var(--accent-primary)" : "var(--text-secondary)"}
              />
            </Timeline.Badge>
            <Timeline.Body sx={{ color: "var(--text-primary)" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                <Text sx={{ fontWeight: "var(--font-weight-bold)", color: "var(--accent-primary)", fontSize: 3 }}>
                  {role.jobTitle}
                </Text>
                {role.isCurrentRole && (
                  <Text
                    sx={{
                      bg: "var(--accent-primary)",
                      color: "var(--bg-primary)",
                      px: 2,
                      py: 1,
                      borderRadius: "var(--radius-md)",
                      fontSize: 0,
                      fontWeight: "var(--font-weight-bold)",
                    }}
                  >
                    Current
                  </Text>
                )}
              </Box>
              <Text sx={{ color: "var(--text-secondary)", mb: 3, fontSize: 1 }}>
                {role.location} • {formatDate(role.startDate, role.endDate)}
              </Text>
              <p>
              <Text sx={{ color: "var(--text-primary)", mb: 3 }}>
                {role.description}
              </Text>
              </p>

              {role.responsibilities && role.responsibilities.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Text sx={{ fontWeight: "var(--font-weight-bold)", color: "var(--text-secondary)", mb: 2 }}>
                    Responsibilities
                  </Text>
                  <ul style={{ color: "var(--text-secondary)", paddingLeft: "20px" }}>
                    {role.responsibilities.slice().map((resp, i) => (
                      <li key={i} style={{ marginBottom: "8px" }}>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </Box>
              )}

              {role.technologies && role.technologies.length > 0 && (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {role.technologies.slice().map((tech, i) => (
                    <Text
                      key={i}
                      sx={{
                        bg: "var(--bg-secondary)",
                        color: "var(--accent-primary)",
                        px: 2,
                        py: 1,
                        borderRadius: "var(--radius-sm)",
                        fontSize: 0,
                        border: "1px solid var(--border-primary)",
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
