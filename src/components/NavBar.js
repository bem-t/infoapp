import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBarCom = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/members">Members</Nav.Link>
        <Nav.Link href="/events">Events</Nav.Link>
        <Nav.Link href="/repos">Repos</Nav.Link>
        <Nav.Link href="/hooks">Hooks</Nav.Link>
        <Nav.Link href="/issues">Issues</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
};
export default NavBarCom