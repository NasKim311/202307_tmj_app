import React from "react";
import { NavLink } from 'react-router-dom';

const SideBarV = ({state , toggleMenu , side}) => (
    <>

    <div className="side-menu-bar">
        <div className="menu-box">
            <ul className="menu">
                <a href="/">
                    <li>
                        <span className="emozi">🏠</span>
                        <span className="name">홈으로</span>
                    </li>
                </a>
                <a href="/map_finder">
                    <li>
                        <span className="emozi">🗺</span>
                        <span className="name">지도 찾기</span>
                    </li>
                </a>
            </ul>
            
                <ul className="menu">
                    <a>
                        <li>
                            <span className="emozi">👋</span>
                            <span className="name">로그인</span>
                        </li>
                    </a>
                </ul>

        </div>
        <div className="under-box">
            <div className="menu-box">
                <ul className="menu hide-md">
                    <a href="/boundary">
                        <li>
                            <span className="emozi">🏖</span>
                            <span className="name">바운더리</span>
                        </li>
                    </a>
                    <a href="/interview">
                        <li>
                            <span className="emozi">📝</span>
                            <span className="name">인터뷰</span>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    </div>

    </>
    

);

export default SideBarV