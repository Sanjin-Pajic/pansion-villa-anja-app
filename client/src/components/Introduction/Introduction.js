import React from "react";
import "./Introduction.css";
import "../../img/introduction_img.jpg"

export default function Introduction() {
    const img = require("../../img/introduction_img.jpg")
    return (
    <div className="introduction_wrapper">
        <div className="introduction_leftside">
        <h1 className="introduction_title"><span className="introduction_title_highlighted">Introduction </span>of Villa Anja <br></br><h1 className="introduction_title_borderbottom">_______</h1></h1>
        <p className="introduction_italic_text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
        <p className="introduction_highlighted_text">WE ARE AVAILABLE FOR BUSINESS</p>
        <p className="introduction_long_paragraph">quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam. quis nostrum exerci-tationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi con-sequatur? Quis autem vel eum iure reprehenderit qui in ea volup. quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam. quis nostrum exerci-tationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi con-sequatur? Quis autem vel eum iure reprehenderit qui in ea volup.</p>
        <button className="btnMoreAboutUs">More about us</button>
        </div>
        <div className="introduction_rightside">
            <img className="introduction-img" src={img}></img>
        </div>
    </div>
    )
}