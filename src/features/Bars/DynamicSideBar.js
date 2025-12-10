import { NavList } from "@primer/react";
import NavItem from "../../components/NavItem";
import { useMediaQuery } from "react-responsive";

const DynamicSideBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  if (isMobile) {
    return null;
  }
  return (
    <NavList sx={{ ml: 80 }}>
      <NavList.Group>
        <NavItem to="Home">Home</NavItem>
      </NavList.Group>
      <NavList.Group>
        <NavItem to="About">About</NavItem>
      </NavList.Group>
      <NavList.Group title="Professional">
        <NavItem to="CV">
          Curriculum Vitae
        </NavItem>
        <NavItem to="Projects">
          Projects
        </NavItem>
      </NavList.Group>
      <NavList.Group title="Career">
        <NavItem to="PlayStation">
          PlayStation
          <NavList.TrailingVisual>2021</NavList.TrailingVisual>
        </NavItem>
        <NavItem to="Novabase">
          Novabase
          <NavList.TrailingVisual>2019</NavList.TrailingVisual>
        </NavItem>
        <NavItem to="Education">Education</NavItem>
      </NavList.Group>
      <NavList.Group title="Extra">
        <NavItem to="CarlosDamasio">CarlosDamasio</NavItem>
      </NavList.Group>
    </NavList>
  );
};
export default DynamicSideBar;
