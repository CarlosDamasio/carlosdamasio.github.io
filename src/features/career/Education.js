import { Octicon, Text, Timeline } from "@primer/react";
import "../../css/custom.css";
import { FeedTagIcon } from "@primer/octicons-react";
import Divider from "../../components/Divider";
function Education() {
  return (
    <Timeline clipSidebar="true">
      <Text as="p">Academic Qualifactions</Text>
      <Timeline.Item>
        <Timeline.Badge>
          <Octicon icon={FeedTagIcon} size={32} color="#C0C9D7" />
        </Timeline.Badge>
        <Timeline.Body sx={{ color: "text.primary" }}>
          <Text sx={{ fontWeight: "bold", color: "#C0C9D7" }}>
            ISCTE-IUL (Lisbon, Portugal)
          </Text>
          <Text as="p">
            BSc in Computer Science and Business Administration
          </Text>
        </Timeline.Body>
      </Timeline.Item>
      <Divider />
      <Text as="p">Certifications</Text>
      <Timeline.Item>
        <Timeline.Badge>
          <Octicon icon={FeedTagIcon} size={32} color="#C0C9D7" />
        </Timeline.Badge>
        <Timeline.Body sx={{ color: "text.primary" }}>
          <Text sx={{ fontWeight: "bold", color: "#C0C9D7" }}>
            Amazon Web Services
          </Text>
          <Text as="p">AWS Certified Solutions Architect Associate (2019)</Text>
        </Timeline.Body>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Badge>
          <Octicon icon={FeedTagIcon} size={32} color="#C0C9D7" />
        </Timeline.Badge>
        <Timeline.Body sx={{ color: "text.primary" }}>
          <Text sx={{ fontWeight: "bold", color: "#C0C9D7" }}>
            MicroStrategy
          </Text>
          <Text as="p">
            MicroStrategy Certified Engineering Principal (2015)
          </Text>
        </Timeline.Body>
      </Timeline.Item>
    </Timeline>
  );
}
export default Education;
