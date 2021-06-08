import React from "react";
import "./NavBar.css";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { withRouter } from "react-router";
const navListStyle = {
  color: "white",
  marginLeft: "50px",
  marginRight: "50px",
};
const NavBar = () => {
  return (
    <Navbar
      style={{ top: 0, position: "sticky", zIndex: 3 }}
      className="nav-bar-here"
      bg="dark"
      expand="lg"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto nav-list">
          <Nav.Link as={Link} to="/home" style={navListStyle} href="#home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/myWorks" style={navListStyle} href="#link">
            My Works
          </Nav.Link>
          <Nav.Link as={Link} to="/blogs" style={navListStyle} href="#link">
            Blogs
          </Nav.Link>
          <Nav.Link as={Link} to="/about" style={navListStyle} href="#link">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" style={navListStyle} href="#link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
