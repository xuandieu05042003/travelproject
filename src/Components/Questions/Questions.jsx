import React, { useState, useEffect } from "react";
import "./Questions.css";
import Accordion from "./Accordion";

import Aos from "aos";
import "aos/dist/aos.css";

const Questions = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[]);

    const [active, setActive] = useState("How do I choose the right travel destination for me?");

    return (
        <div className="questions section container">
            <div className="secHeading">
                <h3>Frequently Asked Questions</h3>
            </div>

            <div className="secContainer grid">
                <div className="accordion grid">
                    <Accordion 
                        title="How do I choose the right travel destination for me?"
                        desc="Consider your preferences, budget, desired experiences and the type of environment you prefer. 
                        Research a destination that suits you, your interests, and offers attractions or activities you find appealing."
                        active={active}
                        setActive={setActive}
                    />

                    <Accordion 
                        title="How can I find budget-friendly travel options and deals?"
                        desc="Use an aggregator site like Skyscanner and sign up for alerts to find travel deals, 
                        and be flexible with dates and locations to get a good price."
                        active={active}
                        setActive={setActive}
                    />

                    <Accordion 
                        title="What essential items should I pack for my adventure?"
                        desc="The essential items you should pack for your adventure can vary depending on the type of adventure, its duration, 
                        and the specific conditions you'll encounter."
                        active={active}
                        setActive={setActive}
                    />

                    <Accordion 
                        title="What are the best times to visit specific destinations?"
                        desc="Research the climate, weather patterns, and peak tourist seasons of the destination you're interested in. 
                        Opt for the shoulder seasons when the weather is pleasant, and crowds are fewer, if possible."
                        active={active}
                        setActive={setActive}
                    />
                </div>

                <div className="form">
                    <div className="secHeading">
                        <h4 data-aos = 'fade-down'>Do you have any specific questions?</h4>
                        <p data-aos = 'fade-down'>Please fill the form below and our dedicated team will get in touch with you as soon as possible.</p>
                    </div>

                    <div className="formContent grid">
                        <input type="email" placeholder="Enter email address" data-aos = 'fade-down'/>
                        <textarea placeholder="Enter your questions here" data-aos = 'fade-down'></textarea>
                        <button className="SMit btn" data-aos = 'fade-down'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
