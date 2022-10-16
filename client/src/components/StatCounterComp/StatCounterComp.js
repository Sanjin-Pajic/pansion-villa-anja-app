import React from "react";
import "./StatCounterComp.css";
import CountUp from 'react-countup';

export default function StatCounterComp (props) {
    return (
        <div className="stat-counter-comp-wrapper">
            <div className="stat-counter-comp">
                <CountUp end = {props.end}/>
                <p className="stat-counter-comp-description">{props.statCounterCompDescription}</p>
            </div>
        </div>
    )
}