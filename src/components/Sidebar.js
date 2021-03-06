import React , {useState} from 'react';
import './Sidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import MessageIcon from '@material-ui/icons/Message';

function Sidebar({likes, messages, shares}, ref) {

    const [liked, setLiked] = useState(false);

    return (
        <div className="sidebar">
            <div className="sidebar_content">
                
                <div className="icons_container">
                    {liked ? (
                    <FavoriteIcon onClick={ () => setLiked(false)} 
                    fontSize="large" className="icon"/>
                    ) : (<FavoriteBorderIcon onClick={ () => setLiked(true)} 
                        fontSize="large" className="icon"/>        
                    )}
                    <h3 style={{color: 'white'}}>{liked ? Number(likes) + 1 : likes}</h3>
                </div>

                <div className="icons_container">
                    <MessageIcon fontSize="large" className="icon"/>
                    <h3 style={{color: 'white'}}>{messages}</h3>
                </div>

                <div className="icons_container">
                    <ShareIcon fontSize="large" className="icon"/>
                    <h3 style={{color: 'white'}}>{shares}</h3>
                </div>                
            </div>
            
        </div>
    )
}

export default React.forwardRef(Sidebar);

