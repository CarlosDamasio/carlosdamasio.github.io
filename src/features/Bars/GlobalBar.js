import avatar from "./../../assets/avatar.svg";
import github from "./../../assets/github-white.svg";
import linkedin from "./../../assets/linkedin.svg";
import curriculum from "./../../data/CV_Carlos_Damasio_2024_06.docx";
import { AiOutlineFileWord } from "react-icons/ai";
import { Avatar, Header, Octicon, Tooltip } from "@primer/react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import DynamicDrawer from "./DynamicDrawer";

function HeaderLink({ to, children }) {
  const resolved = useResolvedPath(to);
  const isCurrent = useMatch({ path: resolved.pathname, end: true });
  return (
    <Header.Link
      as={Link}
      to={to}
      aria-current={isCurrent ? "page" : undefined}
    >
      {children}
    </Header.Link>
  );
}

function GlobalBar() {
  return (
    <Header sx={{ overflow: "auto" }}>
      <Header.Item>
        <DynamicDrawer />
      </Header.Item>
      <Header.Item>
        <HeaderLink
          to="/Home"
          sx={{
            fontSize: 2,
          }}
        >
          <Avatar
            alt="avatar"
            src={avatar}
            size="50"
            sx={{ mr: 2, boxShadow: "0px 0px #888888" }}
          />
          <span>CarlosDamasio.com</span>
        </HeaderLink>
      </Header.Item>
      <Header.Item>
        <HeaderLink to="/CV">
          CV
        </HeaderLink>
      </Header.Item>
      <Header.Item>
        <HeaderLink to="/Projects">
          Projects
        </HeaderLink>
      </Header.Item>
      <Header.Item full></Header.Item>
      <Header.Item>
        <Header.Link
          href={curriculum}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip aria-label="CV Download" direction="se">
            <Octicon
              icon={AiOutlineFileWord}
              color="#d5d9e6"
              size={25}
              sx={{ mr: 2, boxShadow: "0px 0px #888888" }}
            />
          </Tooltip>
        </Header.Link>
        <Tooltip aria-label="Github" direction="se">
          <Header.Link
            href="https://github.com/CarlosDamasio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              alt="github"
              src={github}
              size="25"
              sx={{ mr: 2, boxShadow: "0px 0px #888888" }}
            />
          </Header.Link>
        </Tooltip>
        <Tooltip aria-label="Linkedin" direction="se">
          <Header.Link
            href="https://www.linkedin.com/in/cdamasio19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              alt="linkedin"
              src={linkedin}
              size="25"
              sx={{ boxShadow: "0px 0px #888888" }}
            />
          </Header.Link>
        </Tooltip>
      </Header.Item>
    </Header>
  );
}

export default GlobalBar;
