import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./styles.css";
import { Link } from "react-router-dom";

function NavBar2() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className="logo">
          <Link to="/">
            <img
              alt="Quikyempresa"
              src={
                "https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo+nuevo/SAN-MATEO.png"
              }
              width="140px"
              height="50px"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="item-nav">
            <Link to="/admin">Usuario</Link>
          </Nav>
          <Nav className="item-nav">
            <Link to="/otraspruebas">Buscador de pruebas</Link>
          </Nav>
          <Nav className="item-nav">
            <Link to="/bolsatrabajo">Bolsa de trabajo</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar2;
