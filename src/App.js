import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Video from './components/Video';
import Nav from './components/Nav';
import Accounts from './components/Accounts';
import './App.css';


function App() {

  const [videos, setVideos] = useState([]);

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
      <Nav />
        <div className="app">
            <Accounts />
            <div className="container">
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
