import React, {useEffect} from "react";
import './Home.css'
// Import assets
import Video from '../../Assets/video.mp4'
import Image11 from '../../Assets/Image11.png'
import Image22 from '../../Assets/Image22.png'
import Image33 from '../../Assets/Image33.png'
import Image44 from '../../Assets/Image44.png'

import Aos from "aos";
import "aos/dist/aos.css";
//import icons
import {AiOutlineSwapRight} from 'react-icons/ai'

const Home = () =>{

    useEffect(() => {
        Aos.init({duration: 2000})
    },[]);

    return <div className="Home">
        <div className="videoBg">
            <video src={Video} autoPlay loop muted></video>
        </div>

        <div className="sectionText">
            <h1 data-aos = 'fade-up'>Unlock Your Travel Dreams With Us!</h1>
            <p data-aos = 'fade-up'>Discover the world's most adventurous nature, life is so short for a trip.</p>
            <button className="btn flex" data-aos = 'fade-up'>GET STARTED 
                <AiOutlineSwapRight className='icon'/> 
            </button>
        </div>

        <div className="popularPlaces">
            <div className="content">
                <h3 data-aos = 'fade-up'>Popular Places</h3>
                <div className="images flex" data-aos = 'fade-up'>
                    <img src={Image11} alt="Destination Image" />
                    <img src={Image22} alt="Destination Image" />
                    <img src={Image33} alt="Destination Image" />
                    <img src={Image44} alt="Destination Image" />
                </div>
            </div>
        </div>

    </div>
}

export default Home;