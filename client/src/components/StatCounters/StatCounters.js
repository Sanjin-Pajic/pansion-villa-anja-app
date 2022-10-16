import React from "react";
import "./StatCounters.css";
import StatCounterComp from "../StatCounterComp/StatCounterComp";

export default function StatCounters() {
    return (
        <div className="stat-counters-wrapper">
            <div className="stat-counters">
                <StatCounterComp end = {500} statCounterCompDescription = "served"/>
            </div>
        </div>
    )
}