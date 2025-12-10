import React, { useState } from "react";
import { Offcanvas, Nav } from "react-bootstrap";
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
          <Nav.Link onClick={handleClose}>
            <NavItem to="Home">Home</NavItem>
          </Nav.Link>
        </NavList.Group>
        <NavList.Group>
          <Nav.Link onClick={handleClose}>
            <NavItem to="About">About</NavItem>
          </Nav.Link>
        </NavList.Group>
        <NavList.Group title="Professional">
          <Nav.Link onClick={handleClose}>
            <NavItem to="CV">Curriculum Vitae</NavItem>
          </Nav.Link>
          <Nav.Link onClick={handleClose}>
            <NavItem to="Projects">Projects</NavItem>
          </Nav.Link>
        </NavList.Group>
        <NavList.Group title="Career">
          <Nav.Link onClick={handleClose}>
            <NavItem to="PlayStation">
              PlayStation
              <NavList.TrailingVisual>2016</NavList.TrailingVisual>
            </NavItem>
          </Nav.Link>
          <Nav.Link onClick={handleClose}>
            <NavItem to="Novabase">
              Novabase
              <NavList.TrailingVisual>2011</NavList.TrailingVisual>
            </NavItem>
          </Nav.Link>
          <Nav.Link onClick={handleClose}>
            <NavItem to="Education">Education</NavItem>
          </Nav.Link>
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
        sx={{ bg: "#58a6ff" }}
      ></IconButton>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeVariant="white" closeButton></Offcanvas.Header>
        <Offcanvas.Body>{navList}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default DynamicDrawer;
