import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


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
      </Nav>
    </div>
  );
};
