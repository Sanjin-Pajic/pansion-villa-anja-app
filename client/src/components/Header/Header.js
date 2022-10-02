import "./Header.css";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';

export default function Header() {
    var logo = require("../../img/roof-icon-removebg-preview.png");
    return (
        <>
        <div className="header_wrapper">
        <header className="main_header_area">
            <div className="header_top">
                <div className="header_float_left">
                <a className="phoneNumber"> <PhoneIcon style={{color: 'white', verticalAlign: 'middle', display: 'inline-flex', fontSize: "19px", marginRight:"3px"}}/>   + (387) 62 339 318</a>
                <a className="emailInfo"><EmailIcon style={{color: 'white', verticalAlign: 'middle', display: 'inline-flex', fontSize: "19px", marginRight:"3px"}}/>    sanelpajic06@gmail.com</a>
                <a className="workHours"><WatchLaterIcon style={{color: 'white', verticalAlign: 'middle', display: 'inline-flex', fontSize: "19px", marginRight:"3px"}}/> Mon - Sun 00-24:00</a>
                </div>
                <div className="header_float_right">
                    <div className="icon_container">
                        <FacebookIcon style={{color: '#fff', fontSize: "21px", opacity: ".70"}}/>
                        <InstagramIcon style={{color: '#fff', fontSize: "21px", marginLeft:"15px", opacity: ".70"}}/>
                        <GoogleIcon style={{color: '#fff', fontSize: "21px", opacity: ".70", marginLeft:"15px"}}/>

                    </div>
                </div>
            </div>
            <div className="header_bottom_menu">
                <div className="image_logo_wrapper">
                {/*<img src={logo} className="logo"></img>*/}
                <BedroomChildIcon style={{color: "rgb(204, 130, 0)", marginLeft:"7px"}} transform="scale(2)"/>
                <div className="logo_text_wrapper">
                <span className="logo_text_pansion">  Pansion</span>
                <p className="logo_text_villaanja">Villa Anja</p>
                </div>
                </div>
                <nav className="navigation">
                    <ul className="ul-navigation">
                        <li>
                            <a>Home</a>
                            <a>Rooms & Suites</a>
                            <a>Offers</a>
                            <a>About us</a>
                            <a>Contact us</a>
                            <button className="btnBookNow">Book now</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        </div>
        </>
    )
}