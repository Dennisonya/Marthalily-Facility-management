import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Contact.css";


export default function Contact (){

    const[formData, setFormData] = useState({
        name: "",
        email:"",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState(null);

    function handleChange (e){
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]:value }));
    };

  async function handleSubmit(e){
    e.preventDefault();
    setStatus(null);

    try{
        const response = await fetch("http://loaclhost:5000/send-email", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        });
        const result = await response .json();
        if(result.succes){
            setStatus("Message sent Successfully!");
            setFormData({name: "", email:"", subject:"", message:""});
        }else{
            setStatus("Failed to send message. Please try again");
        }
    } catch (error){
        console.error("Error:", error);
        setStatus("An error occurred. PLease try again.");
    }
  };


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
                                <img src="src/components/images/phone-call.png" alt="Phone" className="contact-icon" /> 
                                <span>+234 818 900 4822</span>
                            </div>
                            <div className="contact-detail">
                                <img src="src/components/images/email (2).png" alt="Email" className="contact-icon" /> 
                                <span>info@marthalilyfacilitymanagement.com</span>
                            </div>
                            <div className="contact-detail">
                                <img src="src/components/images/location.png" alt="Location" className="contact-icon" /> 
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