import React, { useState } from "react";
import { Offcanvas, Nav } from "react-bootstrap";
import { IconButton } from "@primer/react";
import { ThreeBarsIcon } from "@primer/octicons-react";
import { useMediaQuery } from "react-responsive";

const DynamicDrawer = () => {
  const [show, setShow] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navLinks = (
    <>
      <Nav.Link href="Home">Home</Nav.Link>
      <Nav.Link href="About">About</Nav.Link>
      <Nav.Link href="PlayStation">PlayStation</Nav.Link>
      <Nav.Link href="Novabase">Novabase</Nav.Link>
      <Nav.Link href="Education">Education</Nav.Link>
      <Nav.Link href="CarlosDamasio">CarlosDamasio</Nav.Link>
      <Nav.Link href="Solvent">Solvent</Nav.Link>
      <Nav.Link href="Miscellaneous">Misc</Nav.Link>
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
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>{navLinks}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default DynamicDrawer;
