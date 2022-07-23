import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";


export const NavBar = () => {
  return (
    <div>
      <Nav fill variant="tabs">
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/members">Members</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/events">Events</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/repos">Repos</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/hooks">Hooks</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/issues">Issues</Link>
      </Nav.Item>
      </Nav>
    </div>
  );
};
