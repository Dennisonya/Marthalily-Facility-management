import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Services.css";
import { reasons } from "./reasons";
import FadeInWhenVisible from "./FadeInWhenVisible";


export default function Services (){
     const navigate = useNavigate();


    const services = [
        {
            "name": "Janitorial & Cleaning Services",
            "text": ["Commercial & residential cleaning","Post contruction cleanup","Deep cleaning & disinfection"],
            "icon": "/images/cleaning-services.png"
        },
        {
            "name": "Security Services",
            "text": ["Manned gaurding and survaillance","Access control and security systems"],
            "icon": "/images/security.png"   
        },
        {
            "name": "integrated Pest Management System - IPMS",
            "text": ["Environmentally safe pest system","Routine and emergency pest Managemenet System"],
            "icon": "/images/pest-control.png"   
        },
        {
            "name": "Streetlight & Infasttucture Maintenance",
            "text": ["Streetlight installation and repairs","Smart lighting solutions"],
            "icon": "/images/streetlight maintenance.png"  
        },
        {
            "name": "Landscaping & Groundskeeping",
            "text": ["Lawn care and maintenance","Green space design and beautification"],
            "icon": "/images/landscaping.png" 
        },
        {
            "name": "Waste Management",
            "text": ["Solid and liquid waste collection","Waste sorting, recycling and disposal"],
            "icon": "/images/container.png"
        },
        {
            "name": "Building, Elevators & Generator Maintenance",
            "text": ["Plumbing, Eletrical, HVAC","General repairs and asset upkeep"],
            "icon": "/images/Elevator & generator maintenance.png"
        }
    ]

      const handleContactClick = () => {
        navigate('/contact');
    };

 

    return(
        <div className="Services">
            <section className="service-hero">
                <nav>
                    <Navbar/>
                </nav>
                <div id="hero-txt">
                    <FadeInWhenVisible delay={0.3}>
                     <h1>Comprehensive Facility Solutions for Every Environment.</h1>
                    <h3>From immaculate cleaning to cutting-edge maintenance, we manage the spaces that power everyday life.</h3>
                `   </FadeInWhenVisible>
                </div>
            </section>

            <section className="services-section">
                <FadeInWhenVisible delay={0.2}>
                <h1>Our Core Service Categories</h1>
                </FadeInWhenVisible>
                <div className="service-list">
                   
                        {services.map((service, index)=>(
                            <FadeInWhenVisible delay={0.3}>
                             <div className="service" key={index}>
                                <img src={service.icon} alt="" id="service-icon"/>
                                <h2>{service.name}</h2>
                                <ul>{service.text.map((serviceList)=>(
                                    <li>{serviceList}</li>
                                ))}</ul>
                                
                            </div>
                            </FadeInWhenVisible>
                        ))}
                </div>
            </section>

          <section className="choose-us">
            <FadeInWhenVisible delay={0.3}>
      <h1 className="choose-us-heading">Why Choose Marthalily for Your Services?</h1>
            </FadeInWhenVisible>

      {reasons.map((reason, index) => (
        <div
          className={`reason-block ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
            <FadeInWhenVisible delay={0.3}>
          <img src={reason.img} alt={reason.title} />
          </FadeInWhenVisible>
          <div className="reason-text">
            <FadeInWhenVisible delay={0.5}>
            <h2>{reason.title}</h2>
            <p>{reason.text}</p>
            </FadeInWhenVisible>
          </div>
        </div>
      ))}
    </section>

    <section className="call-to-action">
        <FadeInWhenVisible delay={0.3}>
        <h1>Ready for a Spotless, Efficient Environment?</h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.5}>
        <h3>Request a Free Consultation</h3>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.7}>
        <h3>Contact us Today!</h3>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.9}>
        <button className="contact-us-btn" onClick={handleContactClick}>Contact Us</button>
        </FadeInWhenVisible>
    </section>

    <section>
        <Footer/>
    </section>
        </div>
    )
}