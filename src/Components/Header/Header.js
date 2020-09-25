import React from "react";
import {Nav, Button} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Button variant="warning">Login</Button>
      </Nav>
    </div>
  );
};

export default Header;
