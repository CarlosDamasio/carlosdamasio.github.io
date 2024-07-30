import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { NavList } from "@primer/react";
import NavItem from "../../components/NavItem";
import { IconButton } from "@primer/react";
import { ThreeBarsIcon } from "@primer/octicons-react";
import { useMediaQuery } from "react-responsive";

const DynamicDrawer = () => {
  const [show, setShow] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navList = (
    <>
      <NavList>
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
    </>
  );

  if (!isMobile) {
    return null;
  }
  return (
    <>
      <IconButton
        aria-label="Menu"
        icon={ThreeBarsIcon}
        onClick={handleShow}
        sx={{ bg: "#1651b1" }}
      ></IconButton>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeVariant="white" closeButton></Offcanvas.Header>
        <Offcanvas.Body>{navList}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default DynamicDrawer;
