import React from "react";
import "./RoomCard.css";

export default function RoomCard(props) {
    return (
        <div className="room-card">
            <div className="room-card-top">
            <img className="room-card-img" src={props.img}></img>
            </div>
            <div className="room-card-bottom">
            <p className="room-card-name">{props.roomName}</p>
            <p className="room-card-description">{props.roomDescription} <br></br><br></br><span className="room-card-border">______</span></p>
            <p className="room-card-price">€{props.roomPrice}<span className="rooms-per-person"> / Person</span></p>
            </div>
        </div>
    )
}