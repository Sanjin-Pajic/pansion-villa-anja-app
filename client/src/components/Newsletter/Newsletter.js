import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
    return (
        <div className="newsletter-wrapper">
            <div className="newsletter">
                <p className="newsletter-text">Subscribe to our brief newsletter to get exclusive or new offers right in your inbox.</p>
                <input className="newsletter-email-input" placeholder="Your email adress"></input>
                <button className="newsletter-subscription-button">Subscription</button>
            </div>
        </div>
    )
}