/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useRef } from 'react';
import './Video.css';
import Footer from './Footer';
import Sidebar from './Sidebar';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Ticker from 'react-ticker';
import music_disc from './pics/disc.png';

const Video = ({channel, description, likes, messages, shares, song, url}) => {

    const videoRef = useRef();
    
    const [playing, setPlaying] = useState(true);
    const [muted, setMuted] = useState(true);

    const playPause = () => {
        if (playing){
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    } 

    const soundV = () => {
        if (muted) {
            videoRef.current.muted = false;
            setMuted(false)
        } else {
            videoRef.current.muted = true;
            setMuted(true)
        }
    }

    return (
        <div className="video">
                {muted ? (
                    <VolumeOffIcon fontSize="large" onClick={soundV} className="vol_icon"/>
                    ) : (<VolumeUpIcon fontSize="large" onClick={soundV} className="vol_icon"/>        
                    )}

            <div className="footer_ticker">
                <LibraryMusicIcon className="icon"/>
                <Ticker mode="smooth" move={playing ? true : false} >
                    {() => (
                        <>
                            <p>{song}</p>
                        </>
                    ) }
                </Ticker>
            </div>
            <img src={music_disc} alt="music_disc" className={playing ? "img_rotate" : "no_rotation"}  />

            <video
            muted={true}
            autoPlay={true}
            loop={true}
            onClick={playPause}
            ref={videoRef}
            src={url}
            className="video_player">
            </video>

            <Footer channel={channel} description={description}/>
            <Sidebar ref={videoRef} likes={likes} messages={messages} shares={shares}/> 
        </div>
    )
}

export default Video;
