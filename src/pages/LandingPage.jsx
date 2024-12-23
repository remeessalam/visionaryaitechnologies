import React from "react";
import HelmetReact from "../elements/HelmetReact";
import HeaderOne from "../components/HeaderOne";
import ContactInner from "../components/ContactInner";
import HeroOne from "../components/HeroOne";
import LandingppageService from "../components/LandingpageService";
import TestimonialOne from "../components/TestimonialOne";
import WhyChoose from "../components/WhyChoose";
import FooterOne from "../components/FooterOne";
import LandingPortfolio from "../components/landingpage/LandingPortfolio";
import LandingHeader from "../components/landingpage/LandingHeader";
import AboutOne from "../components/AboutOne";
import ProcessOne from "../components/ProcessOne";
const LandingPage = ({ page }) => {
  return (
    <div>
      <HelmetReact title={"Home"} />
      {/* HeaderOne */}
      <LandingHeader />
      <HeroOne page={page} />
      <div>
        <ContactInner page={"landing"} />
      </div>
      <div id="about">
        <AboutOne />
      </div>
      <div id="service">
        <LandingppageService page={page} />
      </div>
      <div className="space">
        <WhyChoose />
      </div>
      <div>
        <ProcessOne />
      </div>
      <LandingPortfolio page={page} />
      <div className="space-bottom">
        <TestimonialOne />
      </div>
      <div id="contact">
        <ContactInner page={"landing"} />
      </div>
      <FooterOne />
    </div>
  );
};

export default LandingPage;
