import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import FadeInWhenVisible from "./FadeInWhenVisible.jsx";


const AboutUs = () => {
const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <nav>
            <Navbar/>
        </nav>
        <div id="about-hero-txt">
          <FadeInWhenVisible delay={0.3}>
          <h1>About Us</h1>
          </FadeInWhenVisible>
        </div>
      </section>

<section className="our-story-section">
  <div className="story-content">
    <div className="story-text">
      <FadeInWhenVisible delay={0.2}>
      <h1 id="story-header">Our Story</h1>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
      <p id="story-paragraph">
        MarthaLily Facility Management is a total facility management service provider dedicated to delivering professional, reliable, and cost-effective services that enhance the functionality, safety, and aesthetic of built environments.
        From janitorial and cleaning services to landscaping, pest control, security, waste management, and building maintenance, we manage the spaces that power everyday life. Our operations are built on a foundation of excellence, integrity, and innovation. 
       We don't just maintain buildings;  <strong>we elevate environments.</strong>
      </p>
      </FadeInWhenVisible>
    
    </div>
    <img src="/images/Our-story.webp" alt="Our Story" id="story-img" />
  </div>
</section>

<section className="our-advantage">
  <div className="advantage-header">
    <FadeInWhenVisible delay={0.3}>
    <h2>Our Advantage</h2>
    </FadeInWhenVisible>

    <FadeInWhenVisible delay={0.5}>
    <p>
      At Marthalily Facility Management, we blend innovation, sustainability, and people-first practices to deliver excellence in every service.
    </p>
    </FadeInWhenVisible>
  </div>

  <div className="advantage-grid">
    <FadeInWhenVisible delay={0.3}>
    <div className="advantage-card">
      <img src="/images/tech-driven.webp" className="advantage-img tech" />
      <h3>Tech-Driven Services</h3>
      <p>We use smart tools and automation to enhance efficiency and service quality.</p>
    </div>
    </FadeInWhenVisible>


    <FadeInWhenVisible delay={0.5}>
    <div className="advantage-card">
      <img src="/images/Eco Friendly.webp" className="advantage-img eco" />
      <h3>Eco-Conscious Operations</h3>
      <p>Committed to green cleaning agents and sustainable facility practices.</p>
    </div>
    </FadeInWhenVisible>

    <FadeInWhenVisible delay={0.7}>
    <div className="advantage-card">
      <img src="/images/Pro Team.webp" className="advantage-img trained" />
      <h3>Trained Professionals</h3>
      <p>Our team members are highly trained to deliver consistent, expert-level care.</p>
    </div>
    </FadeInWhenVisible>

    <FadeInWhenVisible delay={0.9}>
    <div className="advantage-card">
      <img src="/images/customer care.webp" className="advantage-img flexible" />
      <h3>Flexible Service Models</h3>
      <p>Customized plans for every client’s unique needs and environment.</p>
    </div>
    </FadeInWhenVisible>

    <FadeInWhenVisible delay={0.11}>
    <div className="advantage-card">
      <img src="/images/customer centric.webp" className="advantage-img customer" />
      <h3>Customer-Centric Culture</h3>
      <p>Everything we do revolves around satisfaction, trust, and long-term value.</p>
    </div>
    </FadeInWhenVisible>
  </div>
</section>

  <section className="mavericks">
    <FadeInWhenVisible delay={0.2}>
      <h1 id="mavericks-header">Meet Our Mavericks</h1>
    </FadeInWhenVisible>

    <FadeInWhenVisible delay={0.4}>
  <p className="mavericks-subtext">
    Our strength lies in the diverse expertise and passion of our team. Each team member brings unique skills and experience, driving innovation and collaboration.
  </p>
    </FadeInWhenVisible>

  <div className="maverick-cards">
    {/* Card 1 */}
    <FadeInWhenVisible delay={0.3}>
    <div className="maverick-card">
      <img src="/images/Lateef Headshot.webp" className="maverick-img placeholder-img" />
      <h3 className="maverick-name">Lateef Gbajabiamila</h3>
      <p className="maverick-title">Chief Executive Officer</p>
      <p className="maverick-desc">
        Results-driven Executive with a diverse background in business development, media, and spirits distribution, leveraging strategic insight, operational excellence, and a passion for structure to lead multicultural teams and deliver innovative, client-focused solutions in the facility management industry.
      </p>
    </div>
    </FadeInWhenVisible>
  
    {/* Card 2 */}
    <FadeInWhenVisible delay={0.5}> 
    <div className="maverick-card">
      <img src="/images/Tolulope headshot.webp" className="maverick-img placeholder-img" />
      <h3 className="maverick-name">Tolulope Durosinmi-Etti</h3>
      <p className="maverick-title">Chief Operating Officer</p>
      <p className="maverick-desc">
        A dynamic operations leader with over six years of cross-industry experience in the UK and Nigeria. Drives process efficiency, team performance and client satisfaction through strategic, data-driven decision-making.
      </p>
    </div>
    </FadeInWhenVisible>

    {/* Card 3 */}
    <FadeInWhenVisible delay={0.7}>
    <div className="maverick-card">
      <img src="/images/Kikelomo Headshot.webp" className="maverick-img placeholder-img" />
      <h3 className="maverick-name">Kikelomo Tito</h3>
      <p className="maverick-title">Head of HR/Projects</p>
      <p className="maverick-desc">
        HR professional with expertise in strategic planning, talent acquisition, and organizational development. Known for driving compliance, performance, and employee engagement through a consultative, results-oriented approach.
      </p>
    </div>
    </FadeInWhenVisible>
  </div>
</section>

<section className="cta-section">
  <div className="cta-content">
    <h2>Partner with Marthalily for Superior Facility Management</h2>
    <div className="cta-buttons">
      <button className="cta-primary" onClick={handleContactClick}>Contact Us Today</button>
    </div>
  </div>
</section>

    <footer>
        <Footer/>
    </footer>
    </div>
  );
};

export default AboutUs;
