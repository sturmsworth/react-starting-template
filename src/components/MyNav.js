import React from "react";

// packages
import { Link } from "react-router-dom";

// routes
import { HOME } from "../routes/index";

// bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to={HOME}>Starting Template</Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link to={HOME} className="nav-link">
          Home
        </Link>
      </Nav>
    </Navbar>
  );
};

export default MyNav;
