import React from "react";
import "./Footer.css";
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';


export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-top-wrapper">
                <div className="footer-top">
                    <div className="footer-infos">
                        <ul className="footer-lists">
                            <li>
                                <p className="footer-title"> <BedroomChildIcon style={{color: "#ffb606", marginLeft:"7px", marginRight: "3px"}} transform="scale(1.7)"/> <span className="footer-bold-text">Pansion</span> Villa Anja </p>
                                <p className="footer-location"> <LocationOnIcon style={{color: "#757575", marginRight:"10px"}}/> Gojka Vukovića 102c, Mostar, 88000</p>
                                <p className="footer-phone"><PhoneIcon style={{color: "#757575", marginRight:"10px"}} transform="scale(0.9)"/>+ 387 62 339 318</p>
                                <button className="footer-button">Book Now</button>
                            </li>
                            <li className="footer-lists-extralinks">
                                <p className="footer-lists-title">Extra links <br></br><span className="footer-border">____</span></p>
                                <p className="footer-link">- Sample link</p>
                                <p className="footer-link">- Sample link</p>
                                <p className="footer-link">- Sample link</p>
                                <p className="footer-link">- Sample link</p>
                            </li>
                            <li className="footer-lists-services">Our services <br></br> <span className="footer-border">____</span>
                                <p className="footer-link">- Sample link</p>
                                <p className="footer-link">- Sample link</p>
                                <p className="footer-link">- Sample link</p>
                                <p className="footer-link">- Sample link</p>
                            </li>
                            <li className="footer-lists-social-media">Social media<br></br> <span className="footer-border">____</span>
                            <p className="footer-link">- Sample link</p>
                                <p className="footer-link">- Sample link</p>
                                <p className="footer-link">- Sample link</p>
                                <p className="footer-link">- Sample link</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-wrapper">
                <div className="footer-bottom">
                    <p className="footer-copyright">Copyright © Pansion Villa Anja. All rights reserved.</p>
                    <p className="footer-signature">Powered by: Sanjin Pajic</p>
                </div>
            </div>
        </div>
    )
}