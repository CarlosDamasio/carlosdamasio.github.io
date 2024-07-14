import { Octicon, Text, Timeline } from "@primer/react";
import { FeedTagIcon } from "@primer/octicons-react";
function Novabase() {
  return (
    <>
      <Text as="p">
        Worked in multiple Business Intelligence projects across various
        industries and countries including:
      </Text>
      <Timeline clipSidebar="true">
        <Timeline.Item>
          <Timeline.Badge>
            <Octicon icon={FeedTagIcon} size={32} color="#C0C9D7" />
          </Timeline.Badge>
          <Timeline.Body sx={{ color: "text.primary" }}>
            <Text sx={{ fontWeight: "bold", color: "#C0C9D7" }}>
              Vodafone Group (Telecom Company, UK)
            </Text>
            <Text as="p">
              Development of a Vodafone Data Warehouse Group Solution, being
              part of the ETL team, the main responsibilities included ETL
              development, tasks estimation, follow and validate the work from
              junior developers.
            </Text>
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Badge>
            <Octicon icon={FeedTagIcon} size={32} color="#C0C9D7" />
          </Timeline.Badge>
          <Timeline.Body sx={{ color: "text.primary" }}>
            <Text sx={{ fontWeight: "bold", color: "#C0C9D7" }}>
              Movicel (Telecom Company, Angola)
            </Text>
            <Text as="p">
              Managing the Reporting Team, the role responsibilities included
              Reports and Dashboards development, Servers and Tool
              administration, Analytics Platform road map specification,
              Development process specification, business users and developers
              training, focal point with MicroStrategy for new products
              presentation and Platform assessment.
            </Text>
          </Timeline.Body>
        </Timeline.Item>
      </Timeline>
    </>
  );
}
export default Novabase;
