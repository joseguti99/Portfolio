import React from 'react'
import { BiUser, BiCodeBlock, BiFolder, BiMailSend } from "react-icons/bi";
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
        <div className="sideContainer">
            <div className="profileContainer">
                {/* <img src="https://res.cloudinary.com/hdsqazxtw/image/upload/f_auto,q_auto/w_175,h_175/v1630610707/t3sgwuklfw5poxqhp7fx.png" 
                className="profile" alt="" /> */}
            </div>
            <hr className="text-white mt-4"/>
        <ul className="sideUl">
            <NavLink exact to="/" className="sideLi" activeClassName="active-link">
                <li className="sideLi"><BiUser className="h4 mx-3 tDark"/>About Me</li>
            </NavLink>

            <NavLink exact to="/Skills"  className="sideLi" activeClassName="active-link">
            <li className="sideLi"><BiCodeBlock  className="h4 mx-3 tDark"/>Skills</li>
            </NavLink>

            <NavLink exact to="/Proyects"  className="sideLi" activeClassName="active-link">
            <li className="sideLi"><BiFolder className="h4 mx-3 tDark"/>Proyects</li>
            </NavLink>

            <NavLink exact to="/Contact" className="sideLi" activeClassName="active-link">
            <li className="sideLi"><BiMailSend className="h4 mx-3 tDark"/>Contact</li>
            </NavLink>
        </ul>
        </div>
        </>
    )
}

export default NavBar;

