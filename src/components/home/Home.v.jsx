import React from "react";

const HomeV = ({state}) => (
    <>

    <div className="main-cover">
        <div className="title-box">
            <div className="icon"><img src={`${process.env.PUBLIC_URL}/assets/img/mizalee.png`} /></div>
            <div className="sentence"></div>
            <div className="subTitle">{state.subTitle}</div>
        </div>

        <div className="visited-container">
            <div className="title">
                <span>qweqweqwe </span>
                <div className="sub">asdasdasd</div>
            </div>
        </div>

        {/* <ul className="select-box">
            <li></li>
        </ul> */}
    </div>
    

    </>

);

export default HomeV