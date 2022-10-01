import { requirePropFactory } from "@mui/material";
import "./Services.css";
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import LocalParkingIcon from '@mui/icons-material/LocalParking';


export default function Services() {
    return (
        <div className="servicesWrapper">
            <div className="services">
                <div className="services_header">
                <h1 className="services_header_text">Our services</h1>
                <h1 className="services_subtext">quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</h1>
                <span className="link_view_all_services">View all services</span>
                </div>
                <div className="services_bullet1">
                    <BakeryDiningIcon style={{color: "rgb(204, 130, 0)"}} transform="scale(4)"/>
                    <p className="bullet1_header_text">Breakfast</p>
                    <p className="bullet1_subtext">Incidunt ut labore et dolore magnam aliquam quaerat volup tatem. Utad minima.</p>

                </div>
                <div className="services_bullet2">
                    <LocalParkingIcon style={{color: "rgb(204, 130, 0)"}} transform="scale(4)"/>
                    <p className="bullet1_header_text">Parking</p>
                    <p className="bullet1_subtext">Incidunt ut labore et dolore magnam aliquam quaerat volup tatem. Utad minima.</p>

                </div>
            </div>
        </div>

    )
}