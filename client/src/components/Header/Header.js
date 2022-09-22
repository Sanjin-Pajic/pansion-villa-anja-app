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
                        <FacebookIcon style={{color: '#fff', fontSize: "21px", opacity: ".70"}}/>
                        <InstagramIcon style={{color: '#fff', fontSize: "21px", marginLeft:"15px", opacity: ".70"}}/>

                    </div>
                </div>
            </div>
            <div className="header_bottom_menu">
                <div className="image_logo_wrapper">
                <img src="https://cdn-icons-png.flaticon.com/512/2303/2303955.png" className="logo"></img>
                <div className="logo_text_wrapper">
                <span className="logo_text_pansion">Pansion</span>
                <p className="logo_text_villaanja">Villa Anja</p>
                </div>
                </div>
            </div>
        </header>
        </div>
        </>
    )
}