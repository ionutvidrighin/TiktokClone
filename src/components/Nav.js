import React from 'react';
import './Nav.css';
import TikTokLogo from './pics/tiktok.png';

function Nav() {
    return (
        <div className="nav">
            <img className="tiktok_logo" src={TikTokLogo} alt="tiktok"/>
            <div></div>
            <div>
            <p>React App built by</p>
            <p style={{fontStyle: "italic", color: 'grey'}}>Ionut Vidrighin</p>
            </div>
        </div>
    )
}

export default Nav
