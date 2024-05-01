import React from "react";
import './navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
    return <nav className="eventsBar">
        <img src="/images/logo_psg4u.png" alt="psg4u logo" className="logo-events-page" />
        <div className="nav-list-events">
            <div className="nav">
                <img src="/images/homelogo.png" className="logo-events" alt="homelogo" />
                <a href="#home"><Link to={'/main'} class='link'>Home</Link></a>
            </div>
            <button className="logout-button"><Link to={'/'} className="link" id="link">Logout</Link></button>
        </div>
    </nav>
}

export default Navbar;