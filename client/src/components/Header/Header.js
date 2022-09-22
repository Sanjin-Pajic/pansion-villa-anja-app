import "./Header.css";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Header() {
    return (
        <>
        <div className="header_wrapper">
        <header className="main_header_area">
            <div className="header_top">
                <div className="header_float_left">
                <a className="phoneNumber"> <PhoneIcon style={{color: 'white', verticalAlign: 'middle', display: 'inline-flex', fontSize: "19px", marginRight:"3px"}}/>   + (387) 62 339 318</a>
                <a className="emailInfo"><EmailIcon style={{color: 'white', verticalAlign: 'middle', display: 'inline-flex', fontSize: "19px", marginRight:"3px"}}/>    sanelpajic006@gmail.com</a>
                </div>
                <div className="header_float_right">
                    <div className="icon_container">
                        <FacebookIcon style={{color: 'rgb(175, 168, 162)', fontSize: "21px"}}/>
                        <InstagramIcon style={{color: 'rgb(175, 168, 162)', fontSize: "21px", marginLeft:"15px"}}/>

                    </div>
                </div>
            </div>
            <div className="header_bottom_menu"></div>
        </header>
        </div>
        </>
    )
}