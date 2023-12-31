import React, { useState } from "react";
import './Navbar.css'

//Imported icons
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    //state to track and update navbar
    const [navBar, setNavBar] = useState("menu")
    //function to show navBar
    const showNavBar = () => {
        setNavBar("menu showNavBar");
    }
    //function remove navbar
    const removeNavBar = () => {
        setNavBar("menu");
    }

    return <div className="navBar">
        <div className="logoDiv">
            <SiYourtraveldottv className='icon'/>
            <span>OU-Trips</span>
        </div>

        <div className={navBar}>
            <ul>
                <li className="navList">Destination</li>
                <li className="navList">About Us</li>
                <li className="navList">Testimonial</li>
                <li className="navList">Gallery</li>
            </ul>
            {/* icon to remove Navbar */}
            <AiFillCloseCircle className="icon closeIcon " onClick={removeNavBar}/> 
        </div>
        
        <button className="signUpBtn btn">Sign Up</button>
        {/* icon to toogle Navbar */}
        <TbGridDots className="icon menuIcon" onClick={showNavBar}/>
    </div>
}

export default Navbar;