import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import ServiceView from "../components/ServiceView";
import AppointmentTwo from "../components/AppointmentTwo";
import ServiceOne from "../components/ServiceOne";
import TestimonialOne from "../components/TestimonialOne";

const Service = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"Service"} />

      {/* HeaderFive */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title="Service" />

      {/* ServiceOne */}
      <ServiceOne />
      {/* <ServiceView /> */}

      {/* AppointmentTwo */}
      {/* <AppointmentTwo /> */}

      {/* Newsletter */}
      {/* <Newsletter /> */}
      <div className="space-bottom">
        <TestimonialOne />
      </div>
      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default Service;
