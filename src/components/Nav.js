import React from 'react';
import './Nav.css';
import TikTokLogo from './pics/tiktok.png';
import Logo from './pics/ionut_v.png';

function Nav({menu, setMenu}) {



    return (
        <div className="nav">
            <div onClick={() => setMenu(!menu)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            
            <div>
                <img className="tiktok_logo" src={TikTokLogo} alt="tiktok"/>
            </div>

            <div>
                <img className="logo" src={Logo} alt="logo"/>
            </div>
        </div>
    )
}

export default Nav;
