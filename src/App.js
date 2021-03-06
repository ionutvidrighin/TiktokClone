import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Video from './components/Video';
import Nav from './components/Nav';
import Accounts from './components/Accounts';
import './App.css';


function App() {

  const [videos, setVideos] = useState([]);
  const [menu, setMenu] = useState(false);

  useEffect( ()=> {
    async function fetchData() {
      const response = await Axios.get('https://tiktok-datab.herokuapp.com/');
      setVideos(response.data);

      return response;
    }
  
    fetchData();
  }, [])

  return (
    <div>
      <Nav menu={menu} setMenu={setMenu}/>
        <div className="app">
            <Accounts  menu={menu} setMenu={setMenu} />
            <div className={ `container ${menu ? 'container_hide' : ''}` }>
                {videos.map( 
                  ({channel, description, likes, messages, shares, song, url, _id}) => (
                    <Video 
                    channel={channel}
                    description={description}
                    likes={likes}
                    messages={messages}
                    shares={shares}
                    song={song}
                    url={url}
                    key={_id} />)
                )}
            </div>
        </div>
      </div>
    );
}

export default App;
