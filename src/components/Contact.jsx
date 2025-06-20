import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Contact.css";


export default function Contact (){

    return(
        <div className="contact-page">
           <section className="contact-hero">
                   <nav><Navbar/></nav>
                   <div id="contact-hero-txt">
                     <h1>Contact Us</h1>
                   </div>
                 </section>

                  <section className="contact-content-section">
                <div className="contact-form-container">
                    <div className="contact-info-column">
                        <div className="get-in-touch-card">
                            <h2>Get In Touch</h2>
                            <p>Let's discuss how Marthalily can transform your facility with our expert solutions.</p>
                            <div className="contact-detail">
                                <img src="/images/phone-call.png" alt="Phone" className="contact-icon" /> 
                                <span>+234 818 900 4822</span>
                            </div>
                            <div className="contact-detail">
                                <img src="/images/email (2).png" alt="Email" className="contact-icon" /> 
                                <span>info@marthalilyfacilitymanagement.com</span>
                            </div>
                            <div className="contact-detail">
                                <img src="/images/location.png" alt="Location" className="contact-icon" /> 
                                <span>200, Igbosere Road, Igbosere, Ajah, Lagos, Nigeria.</span>
                            </div>
                        
                        </div>
                    </div>
                </div>
                
            </section>

            <Footer />
        </div>
    )
}