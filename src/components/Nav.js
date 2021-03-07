import React from 'react';
import './Nav.css';
import MenuOpen from './pics/open.png';
import MenuClose from './pics/close.png';
import TikTokLogo from './pics/tiktok.png';
import MyLogo from './pics/ionut_v.png';

function Nav({menu, setMenu}) {

    return (
        <div className="nav">
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={ menu ? MenuClose : MenuOpen} alt="menu"/>
            </div>
            
            <div>
                <img className="tiktok_logo" src={TikTokLogo} alt="tiktok"/>
            </div>

            <div>
                <img className="logo" src={MyLogo} alt="logo"/>
            </div>
        </div>
    )
}

export default Nav;
