import { useState } from 'react' 
import {Routes ,Route, useNavigate } from 'react-router-dom';
import './App.css'
import './Navbar';
import Navbar from './Navbar';
import Footer from './Footer';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import AnimateOnView from './AnimateOnView';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function App() {
  const navigate = useNavigate(); // Hook for navigation

  const handleServicesClick = () => {
    navigate('/services');
  };

  const handleLearnMoreClick = () => {
    navigate('/about');
  };
  return(
    <div className='homepage'>
      <Routes>
        <Route path="/" element={
          <>
      <div className='home-hero'>
        <nav>
          <Navbar/>
        </nav>
        <AnimateOnView>
        <div id="hero-txt">
          <h1 >
          Driven By a passion for structure and service, we operate with precision and care-ensuring clean, safe and functional spaces.
        </h1>
        <h3>
          We don't just maintain buildings, we elevate environments
        </h3>
        <button id="services-btn">
          View our Services
        </button>
        </div>
        </AnimateOnView>
      </div>
 
  <section className="about-preview-section">
      <div className="about-content">
        <AnimateOnView delay={0.2}> 
        <h2>About Marthalily</h2>
         </AnimateOnView>
         <AnimateOnView delay={0.4}>
        <p>
          At Marthalily Facility Management, we're more than service providers — 
          we're your partners in creating safe, clean, and efficient environments. 
          With a commitment to excellence and innovation, we elevate every space we touch.
        </p>
        </AnimateOnView>
        <AnimateOnView delay={0.6}>
        <button className="learn-more-btn" onClick={handleLearnMoreClick}>Learn More</button>
        </AnimateOnView>
      </div>
      <div className="about-image">
        <img 
          src="src/components/images/20250612_0653_Marthalily Logo Design_remix_01jxh48kq0ewdtw1d3ttggbyed.png" 
          alt="Our team at work" 
        />
      </div>
   </section>
    


      <section className='service-section'>
        <AnimateOnView>
          <h1 id="service-header">OUR SERVICES</h1>
          </AnimateOnView>
      <div className="services">
        <AnimateOnView delay={0.2}>
        <div className='service-card'>
          <div>
            <img src="src/components/images/Streetlight Repair.png" alt="" className='service-img'/>
          </div>
          <h2>Streetlight & Infastructure Maintenance</h2>
          <ul>
            <li>Streetlight installation & repairs</li>
            <li>Smart Lighting Solutions</li>
          </ul>
        </div>
        </AnimateOnView>

        <AnimateOnView delay={0.3}>
         <div className='service-card'>
          <div >
              <img src="src/components/images/20250609_2236_Janitorial Staffing Service_remix_01jxb2ztkhf5rb2gb2583yn40y.png" alt="" className='service-img' />
          </div>
          <h2>Janitorial & Cleaning services</h2>
          <ul>
            <li>Commercial & residential cleaning</li>
            <li>Post contruction cleanup</li>
            <li> Deep cleaning & disinfection</li>
          </ul>
        </div>
          </AnimateOnView>


          <AnimateOnView delay={0.4}>
        <div className='service-card'>
          <div>
          <img src="src/components/images/Nigerian Security Officer.png" alt="" className='service-img' />
          </div>
          <h2>Security Services</h2>
          <ul>
            <li>Manned Guarding and surveillance</li>
            <li>Access control and security systems</li>
          </ul>
        </div>
          </AnimateOnView>

      </div>
        <button id="services-btn2" onClick={handleServicesClick}>
          See all our services
        </button>

      </section> 

      <section className='dna-section'>
          <img src="src/components/images/20250611_2020_Facility Workers Smiling_remix_01jxfzz532ext9prtwsd0ky9da.png" alt="" id='dna-img'/>
        <div className="dna-values">
          <AnimateOnView>
          <div className="dna-vision">
            <img src="src/components/images/Group 82.png" alt="" id='vision-img'/>
            <div id='dna-vision-txt'>
                <h1>OUR VISION</h1>
                <h3>To become Africa's leading and most innovative facility management brand, renowned for excellence, sustainability and efficiency</h3>
            </div>
          </div>
          </AnimateOnView>

          <AnimateOnView>
          <div className="dna-vision">
            <img src="src/components/images/Group 83.png" alt="" id='vision-img'/>
            <div id='dna-vision-txt'>
                <h1>OUR MISSION</h1>
                <h3>To become Africa's leading and most innovative facility management brand, renowned for excellence, sustainability and efficiency</h3>
            </div>
          </div>
          </AnimateOnView>
        </div>
      </section>

       <h1 id='values-header'>Our Core Values</h1>
      <section className="core-values">  
          <div className="values">
            <img src="src/components/images/honesty.png" alt="" className='value-img'/>
            <h2>Integrity</h2>
          </div>
           <div className="values">
            <img src="src/components/images/innovation.png" alt="" className='value-img'/>
            <h2>Innovation</h2>
          </div>
           <div className="values">
            <img src="src/components/images/earth.png" alt="" className='value-img'/>
            <h2>Sustainability</h2>
          </div>
           <div className="values">
            <img src="src/components/images/reputation.png" alt="" className='value-img'/>
            <h2>Customer Satisfaction</h2>
          </div>
           <div className="values">
            <img src="src/components/images/worker.png" alt="" className='value-img'/>
            <h2>Trained Professionals</h2>
          </div>
      </section>

    <Footer/>
          </>
        }/>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  )

}
