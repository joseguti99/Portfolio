import React, { useState } from 'react';
import { BiUser, BiCodeBlock, BiFolder, BiMailSend } from "react-icons/bi";
import {Link, NavLink} from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand } from 'reactstrap'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
        {/* <div className="app-header bg-second header-nav-wrapper header-nav-wrapper-lg w-100 navbar-light app-header--shadow">
        <ul className="sideUl">

            

            

            
        </ul>
        </div> */}
        const toggle = () => setIsOpen(!isOpen);
        return (
                <div className='sticky-top'>
                    <Navbar color="dark"
                            dark
                            expand="xl"
                            light
                            fixed='top'>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mx-auto text-center my-2" navbar>
                            <NavItem className="mx-3 my-1">
                                <NavLink    
                                    exact to="/Home" 
                                    className={({ isActive }) => (isActive ? 'active' : 'navLi')}>
                                        <li className="text-center"><BiUser className="h4 mx-3"/>About Me</li>
                                </NavLink>
                            </NavItem>
                            <NavItem className="mx-3 my-1 navHover" >
                                <NavLink 
                                    exact to="/Skills"
                                    className={({ isActive }) => (isActive ? 'active' : 'navLi')}>
                                        <li><BiCodeBlock  className="h4 mx-3"/>Skills</li>
                                </NavLink>
                            </NavItem>
                            <NavItem className="mx-3 my-1 navHover">
                                <NavLink 
                                    exact to="/Proyects" 
                                    className={({ isActive }) => (isActive ? 'active' : 'navLi')}>
                                        <li className=""><BiFolder className="h4 mx-3"/>Proyects</li>
                                </NavLink>
                            </NavItem>
                            <NavItem className="mx-3 my-1 navHover">
                                <NavLink 
                                    exact to="/Contact"
                                    className={({ isActive }) => (isActive ? 'active' : 'navLi')}>
                                        <li className=""><BiFolder className="h4 mx-3"/>Contact</li>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </Navbar>
                </div>
);
}
export default NavBar;

