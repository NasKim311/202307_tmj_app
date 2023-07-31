import React from "react";
import SideBar from 'components/sideBar/SideBar';

const NavBarV = ({state , showSidebar}) => (
<>

    <nav className="navbar">
        <div className="navbar-left">
            <div className="logo-box">
                <a href="/">
                    <b><img src={`${process.env.PUBLIC_URL}/assets/img/cow.png`} alt='TheMatJip_logo' /> The MatJip</b>
                </a>
            </div>
        </div>
        <div className="navbar-right">
            <div className="menu-btn">
                <div className="ani-btn">
                    <a href="#" onClick={showSidebar}>
                    {!state.isShowSidebar &&
                        <div className="open">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/menu-button.png`} alt='TheMatJip_logo' style={{width : '75%', display : 'block',  margin : 'auto'}} />
                        </div>
                    }
                    {state.isShowSidebar &&
                        <div className="close">x</div>
                    }
                    </a>
                </div>
            </div>
        </div>
    </nav>

    {state.isShowSidebar &&
         <SideBar />
     }

</>

);

export default NavBarV