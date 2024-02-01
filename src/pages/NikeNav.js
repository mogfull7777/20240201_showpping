import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function NikeNav() {
  const navi = useNavigate();

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navi("/")}>나이키</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navi("/men")}>Men</Nav.Link>
            <Nav.Link onClick={() => navi("/women")}>Women</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NikeNav;
