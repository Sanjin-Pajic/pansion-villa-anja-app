import React from "react";
import "./Gallery.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "../Carousel/Carousel";

export default function Gallery() {
return (
    <>
    <div className="galleryWrapper">
        <h1 className="gallery-header-text">Villa Anja <span className="gallery-highlighted-word">Gallery</span></h1>
        <p className="gallery-border">______</p>
        <p className="gallery-subtext">"One picture is worth a <span className="gallery-subtext-highlighted-word">thousand</span> words."</p>
        <Carousel/>
    </div>
        <div className="gallery-subborder"></div>
        </>
)
}
