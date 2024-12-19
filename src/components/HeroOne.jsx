import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // import from react-scroll

const HeroOne = ({ page }) => {
  const [hover, setHover] = useState(false);
  console.log(page, "adlsfjaksdf");
  return (
    <div
      className="hero-wrapper bg-smoke hero-1"
      id="hero"
      style={{
        height: "100vh",
        backgroundImage: "url(assets/img/images/homebackground-image.jpg)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "justify-center",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-12">
              <div className="hero-style1">
                {/* <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Growth Accel erato
              </span> */}
                <h1 className="hero-title">
                  {page === "web" && "Web App Development"}
                  {page === "app" && "Mobile App Development"}
                  {!page && "Innovative Solutions Shaping the Future"}
                </h1>
                <p className="hero-text">
                  {page === "web" && (
                    <>
                      <h6>
                        Our web app development services are customized to
                        tackle the unique challenges of your business.
                      </h6>
                      <p>
                        At Visionary AI Technologies, we take pride in offering
                        a wide range of advanced technologies to deliver
                        dependable web application development solutions to
                        clients globally. As a leading web application
                        development company, we are committed to providing
                        innovative technology solutions that drive the creation
                        of next-generation web applications.
                      </p>
                    </>
                  )}
                  {page === "app" && (
                    <>
                      <h6>
                        Get Exceptionally Innovative Mobile App Development
                        Services.
                      </h6>
                      <p>
                        Harness the app development prowess of Visionary AI
                        Technologies, a leading mobile app development company
                        with a proven track record. Our expert developers have
                        successfully partnered with startups, mid-sized
                        businesses, and enterprises, delivering custom app
                        solutions to global clients. From basic mobile apps to
                        advanced IoT-based applications, we’ve done it all,
                        consistently enhancing our services to meet your
                        evolving needs.
                      </p>
                    </>
                  )}
                  {page !== "app" &&
                    page !== "web" &&
                    "Shaping Ideas into Next-Gen Digital Realities."}

                  {/* Shaping Ideas into Next-Gen Digital Realities. */}
                </p>
                <div className="btn-group">
                  {page === "web" || page === "app" ? (
                    <>
                      <ScrollLink
                        to="about"
                        className="global-btn"
                        style={{ color: hover ? "black" : "white" }}
                        onMouseOver={() => setHover(true)}
                        onMouseOut={() => setHover(false)}
                      >
                        Learn More{" "}
                        <img
                          src="assets/img/icon/right-icon.svg"
                          alt="Bizmaster"
                        />
                      </ScrollLink>
                      <ScrollLink
                        to="service"
                        className="global-btn style-border"
                      >
                        Our Services
                      </ScrollLink>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/about"
                        className="global-btn"
                        style={{ color: hover ? "black" : "white" }}
                        onMouseOver={() => setHover(true)}
                        onMouseOut={() => setHover(false)}
                      >
                        Learn More{" "}
                        <img
                          src="assets/img/icon/right-icon.svg"
                          alt="Bizmaster"
                        />
                      </Link>
                      <Link to="/service" className="global-btn style-border">
                        Our Services
                      </Link>
                    </>
                  )}
                  {/* <Link
                  to="/about"
                  className="global-btn"
                  style={{ color: hover ? "black" : "white" }}
                  onMouseOver={() => setHover(true)}
                  onMouseOut={() => setHover(false)}
                >
                  Learn More{" "}
                  <img src="assets/img/icon/right-icon.svg" alt="Bizmaster" />
                </Link>
                <Link to="/service" className="global-btn style-border">
                  Our Services
                </Link> */}
                </div>
              </div>
            </div>
            {/* <div className="col-xl-6">
            <div className="hero-image-wrapp">
              <div className="hero-thumb text-center">
                <img src="assets/img/hero/hero_thumb_1_1.png" alt="img" />
              </div>
              <div className="hero-shape1" />
              <div className="hero-shape2" />
              <div className="hero-shape3" />
              <div className="hero-shape4" />
              <div className="hero-shape5 spin" />
            </div>
          </div> */}
          </div>
          {/* <div className="hero-item-content">
          <div className="hero-card_wrapper">
            <div className="hero-card">
              <div className="hero-card_icon">
                <img src="assets/img/icon/1.svg" alt="img" />
              </div>
              <div className="hero-card_content">
                <h4 className="box-title">Growth Acceler</h4>
                <p className="hero-card_text">A business consultant</p>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-card_icon">
                <img src="assets/img/icon/2.svg" alt="img" />
              </div>
              <div className="hero-card_content">
                <h4 className="box-title">Growth Acceler</h4>
                <p className="hero-card_text">Consultan professional</p>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
