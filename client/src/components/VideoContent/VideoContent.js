import React from "react";
import "./VideoContent.css";
import ReactPlayer from 'react-player/youtube';

const delayPlay = () => {
    setTimeout(() => {
        return true;
    }, 500)
};

export default function VideoContent(props) {
    return (
        <div className="video-content">
            <ReactPlayer url = {props.url} width="100%" height="600px" controls muted/>
        </div>
    )
}