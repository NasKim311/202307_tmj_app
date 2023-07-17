import React from "react";
import { NavLink } from 'react-router-dom';

// image
import TheMatJip_logo from '../../assets/img/cow.png';
import menu_logo from '../../assets/img/menu-button.png';


const SideBarV = ({state , toggleMenu}) => (

    <aside className="main-sidebar elevation-4">

    {/* <a href="#" className="brand-link">
      <span className="brand-text font-weight-light">홈으로</span>
    </a> */}

    <div className="sidebar">
        {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="info">
                <a className="d-block">{userid}
                &nbsp;
                <button onClick={this.signOut} className="nav-icon fas">logout</button>
                </a>
            </div>
        </div> */}

        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                <li className="nav-item">
                    <NavLink to='/' className="nav-link">
                    <i className="nav-icon fas fa-th"></i>
                    <p>
                        홈으로
                        
                    </p>
                    </NavLink>
                </li>
            </ul>   
        </nav>
    
    </div>
    
  </aside>

);

export default SideBarV