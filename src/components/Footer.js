import React from 'react';
import './Footer.css';


function Footer({channel, description}) {

    return (
        <div className="footer">

            <div className="footer_content">
                <h3>@{channel}</h3>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default Footer
