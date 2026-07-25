import avatar from "./../../assets/avatar.svg";
import github from "./../../assets/github-white.svg";
import linkedin from "./../../assets/linkedin.svg";
import curriculum from "./../../data/CV_Carlos_Damasio_2026_01.pages";
import { AiOutlineFileWord } from "react-icons/ai";
import { Avatar, Header, Octicon, Tooltip } from "@primer/react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import DynamicDrawer from "./DynamicDrawer";

function HeaderLink({ to, children, sx }) {
  const resolved = useResolvedPath(to);
  const isCurrent = useMatch({ path: resolved.pathname, end: true });
  return (
    <Header.Link
      as={Link}
      to={to}
      aria-current={isCurrent ? "page" : undefined}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 2,
        minWidth: 0,
        maxWidth: "100%",
        overflow: "hidden",
        ...sx,
      }}
    >
      {children}
    </Header.Link>
  );
}

function GlobalBar() {
  return (
    <Header
      sx={{
        width: "100%",
        minWidth: 0,
        flexWrap: "wrap",
        rowGap: 2,
        overflowX: "hidden",
      }}
    >
      <Header.Item sx={{ minWidth: 0, flexShrink: 0 }}>
        <DynamicDrawer />
      </Header.Item>
      <Header.Item sx={{ minWidth: 0, flexShrink: 1 }}>
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
            sx={{ boxShadow: "0px 0px #888888", flexShrink: 0 }}
          />
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            CarlosDamasio.com
          </span>
        </HeaderLink>
      </Header.Item>
      <Header.Item full sx={{ flexGrow: 1, minWidth: 0 }}></Header.Item>
      <Header.Item sx={{ minWidth: 0, flexShrink: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            gap: 8,
            minWidth: 0,
          }}
        >
          <Header.Link
            href={curriculum}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}
          >
            <Tooltip aria-label="CV Download" direction="se">
              <Octicon
                icon={AiOutlineFileWord}
                color="#d5d9e6"
                size={25}
                sx={{ boxShadow: "0px 0px #888888" }}
              />
            </Tooltip>
          </Header.Link>
          <Tooltip aria-label="Github" direction="se">
            <Header.Link
              href="https://github.com/CarlosDamasio"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}
            >
              <Avatar
                alt="github"
                src={github}
                size="25"
                sx={{ boxShadow: "0px 0px #888888" }}
              />
            </Header.Link>
          </Tooltip>
          <Tooltip aria-label="Linkedin" direction="se">
            <Header.Link
              href="https://www.linkedin.com/in/cdamasio19/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}
            >
              <Avatar
                alt="linkedin"
                src={linkedin}
                size="25"
                sx={{ boxShadow: "0px 0px #888888" }}
              />
            </Header.Link>
          </Tooltip>
        </div>
      </Header.Item>
    </Header>
  );
}

export default GlobalBar;
