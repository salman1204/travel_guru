import React from "react";
import {Nav, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Nav className="nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/login" className="nav-link"> <Button variant="warning">Login</Button> </Link>
      </Nav>
    </div>
  );
};

export default Header;
