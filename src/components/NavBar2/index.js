import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./styles.css";
import { Link } from "react-router-dom";

function NavBar2() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="logo">
          <Link to="/">
            <img
              alt="Quikyempresa"
              src={
                "https://imagenesrutalab.s3.amazonaws.com/quikyempresa/logoQuikyempresa3.png"
              }
              width="130px"
              height="40px"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="item-nav">
            <Link to="/profile">Usuario</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar2;
