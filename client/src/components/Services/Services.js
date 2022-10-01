import { requirePropFactory } from "@mui/material";
import "./Services.css";


export default function Services() {
    return (
        <div className="servicesWrapper">
            <div className="services">
                <div className="services_header">
                <h1 className="services_header_text">Our services</h1>
                <h1 className="services_subtext">quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</h1>
                <span className="link_view_all_services">View all services</span>
                </div>
                <div className="services_bullet">
                    <img className="bullet1_img" src={require("../../img/breakfast_clipart.png")}></img>
                    <p className="bullet1_header_text">Breakfast</p>
                </div>
                <div className="services_bullet">
                    <img className="bullet1_img" src={require("../../img/breakfast_clipart.png")}></img>
                    <p className="bullet1_header_text">Breakfast</p>
                </div>
                <div className="services_bullet">
                    <img className="bullet1_img" src={require("../../img/breakfast_clipart.png")}></img>
                    <p className="bullet1_header_text">Breakfast</p>
                </div>

                
            </div>
        </div>

    )
}