import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "reactstrap";

export const NavBar = () => {
  return (
    <div>
      <Nav>
        <Nav.Item>
          <NavLink tag={Link} to="/">
            HOME
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink tag={Link} to="/members">
            MEMBERS
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink tag={Link} to="/events">
            EVENTS
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink tag={Link} to="/repos">
            REPOS
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink tag={Link} to="/hooks">
            HOOKS
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink tag={Link} to="/issues">
            ISSUES
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};
