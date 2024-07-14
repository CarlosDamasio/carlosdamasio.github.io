import { Octicon, Text, Timeline } from "@primer/react";
import { FeedTagIcon } from "@primer/octicons-react";
function PlayStation() {
  return (
    <Timeline clipSidebar="true">
      <Timeline.Item>
        <Timeline.Badge>
          <Octicon icon={FeedTagIcon} size={32} color="open.fg" />
        </Timeline.Badge>
        <Timeline.Body sx={{ color: "text.primary" }}>
          <Text sx={{ fontWeight: "bold", color: "open.fg" }}>
            Senior Platform Engineer (London, UK - July 2019 to present)
          </Text>
          <Text as="p">
            Working as Senior Platform Engineer for the Analytics Platform team,
            my work focus around hosting, managing and enhancing our Analytic
            tools stacks such as Microstrategy, Tableau and Snowflake.
          </Text>
        </Timeline.Body>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Badge>
          <Octicon icon={FeedTagIcon} size={32} color="#C0C9D7" />
        </Timeline.Badge>
        <Timeline.Body sx={{ color: "text.primary" }}>
          <Text sx={{ fontWeight: "bold", color: "#C0C9D7" }}>
            Senior Business Intelligence Engineer (London, UK - August 2016 to
            July 2019)
          </Text>
          <Text as="p">
            As a Senior Business Intelligence Engineer, I've developed both
            dashboards and reporting solutions, built data pipelines and data
            structures.
          </Text>
          <Text as="p">
            I've mentored business users on how to extract value from our team
            products and also managed business requirements for further
            enhancements on said products.
          </Text>
        </Timeline.Body>
      </Timeline.Item>
    </Timeline>
  );
}
export default PlayStation;
