import React from 'react';
import './Accounts.css';
import Account from './Account';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';

function Accounts({menu}) {
   
    return (
        <div className={`accounts_section ${menu ? 'accounts_section_show' : ''}`}>
            <div className="top">
                <div>
                    <HomeRoundedIcon fontSize="large" className="home"/> <p id="for_you">For You</p>
                </div>

                <div>
                    <SupervisorAccountOutlinedIcon fontSize="large" className="people"/> <p>Following</p>
                </div>
            </div>

            <div className="accounts"> 
                <p>Suggested accounts</p> 
                <Account />

            </div>
            
        </div>
    )
}

export default Accounts;
