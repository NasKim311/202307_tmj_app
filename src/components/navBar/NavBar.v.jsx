import React from "react";

// image
import TheMatJip_logo from '../../assets/img/cow.png';
import menu_logo from '../../assets/img/menu-button.png';


const NavBarV = ({state}) => (

    <nav className="navbar">
        <div className="navbar-left">
            <div className="logo-box">
                <a href="/">
                    <b><img src={TheMatJip_logo} alt='TheMatJip_logo' /> The MatJip</b>
                </a>
            </div>
        </div>
        <div className="navbar-right">
            <div className="menu-box">
                <a href="/sideBar">
                    <img src={menu_logo} alt='TheMatJip_logo' style={{width : '75%'}} />
                </a>
            </div>
        </div>
    </nav>

);

export default NavBarV