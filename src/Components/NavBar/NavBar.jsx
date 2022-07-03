import React, { useState } from "react";
import { BiUser, BiCodeBlock, BiFolder } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { useEffect } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid sticky-top">
      <Navbar dark className="bg-primary" expand="lg" light fixed="top">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto text-center my-2" navbar>
            <NavItem className="mx-3 my-1">
              <NavLink
                exact
                to="/Home"
                className={({ isActive }) => (isActive ? "active" : "navLi")}
              >
                <li
                  onClick={useEffect(() => {
                    window.scrollTo(0, 0);
                  }, [])}
                  className="text-center"
                >
                  <BiUser className="h4 mx-3" />
                  About Me
                </li>
              </NavLink>
            </NavItem>
            <NavItem className="mx-3 my-1 navHover">
              <NavLink
                exact
                to="/Skills"
                className={({ isActive }) => (isActive ? "active" : "navLi")}
              >
                <li
                  onClick={useEffect(() => {
                    window.scrollTo(0, 0);
                  }, [])}
                >
                  <BiCodeBlock className="h4 mx-3" />
                  Skills
                </li>
              </NavLink>
            </NavItem>
            <NavItem className="mx-3 my-1 navHover">
              <NavLink
                exact
                to="/Proyects"
                className={({ isActive }) => (isActive ? "active" : "navLi")}
              >
                <li
                  onClick={useEffect(() => {
                    window.scrollTo(0, 0);
                  }, [])}
                  className=""
                >
                  <BiFolder className="h4 mx-3" />
                  Proyects
                </li>
              </NavLink>
            </NavItem>
            <NavItem className="mx-3 my-1 navHover">
              <NavLink
                exact
                to="/Contact"
                className={({ isActive }) => (isActive ? "active" : "navLi")}
              >
                <li
                  onClick={useEffect(() => {
                    window.scrollTo(0, 0);
                  }, [])}
                  className=""
                >
                  <BiFolder className="h4 mx-3" />
                  Contact
                </li>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
