import React, {useEffect} from "react";
import './Destinations.css'
//import icons
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

//import images
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'
import image4 from '../../Assets/image4.png'
import image5 from '../../Assets/image5.png'
import image6 from '../../Assets/image6.png'
import image7 from '../../Assets/image7.png'
import image8 from '../../Assets/image8.png'

import Aos from "aos";
import "aos/dist/aos.css";


//Lets creat an array that an array that is gonna contain all destination data and we loop through

//----------------------------------------------------------------------------------------------//
const destinations = [
    {
        id: 1,
        img: image1,
        name: 'Eiffel tower',
        location: 'Champ-de-Mars Park',
        rating: 4.7,
    },
    {
        id: 2,
        img: image2,
        name: 'Solar ship',
        location: 'Alfama district Portugal',
        rating: 4.3,
    },
    {
        id: 3,
        img: image3,
        name: 'House Near Water',
        location: 'Hallstatt, Oberösterreich, Austria',
        rating: 4.9,
    },
    {
        id: 4,
        img: image4,
        name: 'Old street corner',
        location: 'Hong Kong, Hong Kong',
        rating: 4.5,
    },
    {
        id: 5,
        img: image5,
        name: 'Pagoda In The Blue Sky',
        location: 'ThaiLand',
        rating: 4.7,
    },
    {
        id: 6,
        img: image6,
        name: 'City In The Dawn',
        location: 'New York, NY, United States',
        rating: 4.3,
    },
    {
        id: 7,
        img: image7,
        name: 'Mountains And Waters',
        location: 'Urca, RJ, Brazil',
        rating: 4.8,
    },
    {
        id: 8,
        img: image8,
        name: 'Seychelles IslandPrague Castle',
        location: 'Hlavní město Praha, Hlavní město Praha, Czechia',
        rating: 4.9,
    },
]

const Destinations = () =>{

    useEffect(() => {
        Aos.init({duration: 2000})
    },[]);

    return <div className="destination section container">
        <div className="secContainer">
            <div className="secTitle">
                <span className="redText" data-aos = 'fade-up'>EXPLORE NOW</span>
                <h3 data-aos = 'fade-up'>Find Your Dream Destination</h3>
                <p data-aos = 'fade-up'>Fill in the firlds below to find the best spot for your next tour.</p>
            </div>

            <div className="searchField grid">
                <div className="inputField flex" data-aos = 'fade-up'>
                    <MdLocationPin className='icon'/> 
                    <input type="text" placeholder="Location"/>
                </div>

                <div className="inputField flex" data-aos = 'fade-up'>
                    <BsFillCreditCard2FrontFill className='icon'/> 
                    <input type="text" placeholder="Budget"/>
                </div>

                <div className="inputField flex" data-aos = 'fade-up'>
                    <BsCalendarDateFill  className='icon'/> 
                    <input type="text" placeholder="Date"/>
                </div>

                <button className="btn flex" data-aos = 'fade-up'>
                    <BiSearchAlt className='icon'/> Search
                </button>
            </div>

            <div className="secMenu">
                <ul className="flex" data-aos = 'fade-up'>
                    <li className="active">All</li>
                    <li className="active">Recommended</li>
                    <li className="active">Beach</li>
                    <li className="active">Park</li>
                    <li className="active">Nature</li>
                    <li className="active">Mountain</li>
                </ul>
            </div>

            <div className="destinationContainer grid">
                {destinations.map(destination => {
                    return(
                        <div className="singleDestination" key={destination.id} data-aos = 'fade-up'>
                            <div className="imgDiv" data-aos = 'fade-up'>
                                <img src={destination.img} alt="Destination Image" />

                                <div className="descInfo flex">
                                    <div className="text">
                                        <span className="name">{destination.name}
                                        </span>
                                        <p className="flex">
                                            <MdLocationPin className="icon"/>{destination.location}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
}

export default Destinations;