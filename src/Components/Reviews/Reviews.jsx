import React, {useEffect} from "react";
import './Reviews.css'

import Aos from "aos";
import "aos/dist/aos.css";

//import icons
import { FaStar } from "react-icons/fa";
//import images
import Image1 from "../../Assets/user(1).png"
import Image2 from "../../Assets/user(2).png"
import Image3 from "../../Assets/user(3).png"
import Image4 from "../../Assets/user(4).png"
import Image5 from "../../Assets/user(5).png"


const Reviews = () =>{

    useEffect(() => {
        Aos.init({duration: 2000})
    },[]);

    return <div className="review section container">
        <div className="secContainer grid">
            <div className="textDiv">
                <span className="redText" data-aos = 'fade-up'>
                    FROM OUR CLIENTS
                </span>
                <h3 data-aos = 'fade-up'>Real Travel History From Our Beloved Clients</h3>
                <p data-aos = 'fade-up'>
                    By choosing us as their tour agency, customers can expect an
                    enriching and enjoyable travel experience, filled with inforgettable
                    memories that will last a lifetime.
                </p>
                <span className="stars flex" data-aos = 'fade-up'>
                    <FaStar className='icon'/>
                    <FaStar className='icon'/>
                    <FaStar className='icon'/>
                    <FaStar className='icon'/>
                    <FaStar className='icon'/>
                </span>
                <div className="clientsImages flex">
                    <img src={Image1} alt="Client Image" data-aos = 'fade-up'/>
                    <img src={Image2} alt="Client Image" data-aos = 'fade-up'/>
                    <img src={Image3} alt="Client Image" data-aos = 'fade-up'/>
                    <img src={Image4} alt="Client Image" data-aos = 'fade-up'/>
                </div>
            </div>
            <div className="imgDiv">
                <img src={Image5} alt="Div Image" data-aos = 'fade-down'/>
            </div>
        </div>
    </div>
}

export default Reviews;