import React, {useEffect} from "react";
import './Footer.css'

import Aos from "aos";
import "aos/dist/aos.css";

//Imported icons
import { SiYourtraveldottv } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

const Footer = () =>{
    useEffect(() => {
        Aos.init({duration: 2000})
    },[]);

    return <div className="footer">
        <div className="secContainer container grid">
            <div className="logoDiv">

                <div className="footerLogo" data-aos = 'fade-up'>
                    <SiYourtraveldottv className='icon'/>
                    <span>OU-Trips</span>
                </div>
                <div className="socials flex" data-aos = 'fade-up'>
                    <FaFacebook className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaSquareInstagram className='icon'/>
                    <FaTiktok className='icon'/>
                </div>
            </div>

            <div className="footerLinks" data-aos = 'fade-up'>
                <span className="LinkTitle">Information</span>
                <li><a href="#">Home</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Travel</a></li>
                <li><a href="#">Blog</a></li>
            </div>

            <div className="footerLinks" data-aos = 'fade-up'>
                <span className="LinkTitle">Helpful Links</span>
                <li><a href="#">Destination</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Travel & Condition</a></li>
                <li><a href="#">Privacy</a></li>
            </div>

            <div className="footerLinks" data-aos = 'fade-up'>
                <span className="LinkTitle">Contact Details</span>
                <span className="phone">+84 338 365 543</span>
                <span className="email">dieunx0504@gmail.com</span>
            </div>
        </div>
    </div>
}

export default Footer;