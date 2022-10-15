import React from "react";
import "./PostCard.css";

export default function PostCard(props) {
    return (
        <div className="post-card-wrapper">
            <div className="post-card">
                <img className="post-card-img" src={props.postCardImg}></img>
                <p className="post-card-date">{props.postCardDate}</p>
                <p className="post-card-title">{props.postCardTitle}</p>
                <p className="post-card-text">{props.postCardText}</p>
                <p className="post-card-read-more-link">{props.postCardLink}</p>
            </div>
        </div>
    )
}