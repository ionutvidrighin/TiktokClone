/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './Account.css'
import Acc1 from './accounts/acc1.png';
import Acc2 from './accounts/acc2.png';
import Acc3 from './accounts/acc3.png';
import Acc4 from './accounts/acc4.png';
import Acc5 from './accounts/acc5.png';
import Acc6 from './accounts/acc6.png';

function Account() {
    return (
        <div className="accounts__content">
            <div className="accounts_avatar">
                <img src={Acc1} alt="acc" className="acc_pic"/>
                <img src={Acc2} alt="acc" className="acc_pic"/>
                <img src={Acc3} alt="acc" className="acc_pic"/>
                <img src={Acc4} alt="acc" className="acc_pic"/>
                <img src={Acc5} alt="acc" className="acc_pic"/>
                <img src={Acc6} alt="acc" className="acc_pic"/>
        </div>

        <div className="accounts_title">
            <p> Travelling with Dyla </p>
            <p> Beautiful Islands </p>
            <p> On the road </p>
            <p> Surfing </p>
            <p> Carpathian Travel </p>
            <p> Traversy Mountains </p>
        </div>

            
        </div>
    )
}

export default Account
