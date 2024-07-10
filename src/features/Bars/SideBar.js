import { NavList } from "@primer/react";
import NavItem from "../../components/NavItem";

function SideBar() {
  return (
    <NavList sx={{ ml: 80 }}>
      <NavList.Group>
        <NavItem to="Home">Home</NavItem>
      </NavList.Group>
      <NavList.Group>
        <NavItem to="About">About</NavItem>
      </NavList.Group>
      <NavList.Group title="Career">
        <NavItem to="PlayStation">
          PlayStation
          <NavList.TrailingVisual>2016</NavList.TrailingVisual>
        </NavItem>
        <NavItem to="Novabase">
          Novabase
          <NavList.TrailingVisual>2011</NavList.TrailingVisual>
        </NavItem>
        <NavItem to="Education">Education</NavItem>
      </NavList.Group>
      <NavList.Group title="Projects">
        <NavItem to="CarlosDamasio">CarlosDamasio</NavItem>
        <NavItem to="Solvent">Solvent.Life</NavItem>
        <NavItem to="Miscellaneous">Misc</NavItem>
      </NavList.Group>
    </NavList>
  );
}
export default SideBar;
