import React, {useEffect}  from "react";
import './Portifolio.css'
//import assets
import icon1 from '../../Assets/protection.png'
import icon2 from '../../Assets/destination.png'
import icon3 from '../../Assets/online-chat.png'
import icon4 from '../../Assets/service.png'
import image1 from '../../Assets/gridImage1.png'

import Aos from "aos";
import "aos/dist/aos.css";

const Portifolio = () =>{

    useEffect(() => {
        Aos.init({duration: 2000})
    },[]);

    return (
        <div className="portifolio section container">
            <div className="secContainer grid">
                <div className="leftContent">
                    <div className="secHeading">
                        <h3 data-aos = 'fade-up'>Why Should You Choose Us</h3>
                        <p data-aos = 'fade-up'>We have extensive knowledge and experience in the travel industry.</p>
                    </div>
                    <div className="grid">
                        <div className="singlePortifolio flex" data-aos = 'fade-up'>
                            <div className="iconDiv">
                                <img src={icon1} alt="Icon image" />
                            </div>

                            <div className="infor" data-aos = 'fade-up'>
                                <h4>Safety and support</h4>
                                <p>
                                    Our top priority is the safety and well-being of our clients.
                                    We maintain high safety standards and have emergency support 
                                    available during the trip.
                                </p>
                            </div>
                        </div>
                        
                        <div className="singlePortifolio flex" data-aos = 'fade-up'>
                            <div className="iconDiv">
                                <img src={icon2} alt="Icon image" />
                            </div>

                            <div className="infor" data-aos = 'fade-up'>
                                <h4 data-aos = 'fade-up'>Diverse Range of Destinations</h4>
                                <p data-aos = 'fade-up'>
                                    Whether it's a domestic tour or an international ad venture, 
                                    we cover a wide range of destinations to cater to different 
                                    interests and preferences.
                                </p>
                            </div>
                        </div>

                        <div className="singlePortifolio flex" data-aos = 'fade-up'>
                            <div className="iconDiv">
                                <img src={icon4} alt="Icon image" />
                            </div>

                            <div className="infor" data-aos = 'fade-up'>
                                <h4>Top service quality</h4>
                                <p>
                                    We are committed to providing the best travel experience for our customers. 
                                    Our team of travel experts not only has in-depth knowledge but also has a spirit of service, 
                                    always ready to meet all of our customers' needs and desires.
                                </p>
                            </div>
                        </div>

                        <div className="singlePortifolio flex" data-aos = 'fade-up'>
                            <div className="iconDiv">
                                <img src={icon3} alt="Icon image" />
                            </div>

                            <div className="infor" data-aos = 'fade-up'>
                                <h4>24/7 Customer Support</h4>
                                <p>
                                    We provide 24/7 customer support to our clients. 
                                    You can contact us at any time and we will be 
                                    happy to assist you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rightContent" data-aos = 'fade-down'>
                    <img src={image1} alt="Image" />
                </div>
            </div>
        </div>
    )
}

export default Portifolio;