import React from "react";
import {Nav, Button} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Button variant="warning">Login</Button>
      </Nav>
    </div>
  );
};

export default Header;
