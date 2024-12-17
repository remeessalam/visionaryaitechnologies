import React from "react";
import { Link } from "react-router-dom";
const AboutOne = () => {
  return (
    <div className="about-area-1 position-relative space-top">
      <div className="about1-shape-img1">
        <img
          className="about1-shape-img-1"
          src="assets/img/normal/about_shape1-1.jpg"
          alt="img"
        />
      </div>
      <div className="about1-shape-img2">
        <img
          className="about1-shape-img-2"
          src="assets/img/normal/about_shape1-2.png"
          alt="img"
        />
      </div>

      <div className="container">
        <div className="row gx-60 align-items-center">
          <div className="col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area me-xl-5 mb-20">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  About Us
                </span>
                <h2 className="sec-title" style={{ color: "black" }}>
                  Advancing Boldly into the Future with Digital Innovation{" "}
                </h2>
                <p className="sec-text mb-35">
                  Visionary AI Technologies is a premier mobile app development
                  and IT solutions company based in India. We have a proven
                  track record of creating top-ranked mobile apps for Google
                  Play, App Store, and wearables, while specializing in
                  cutting-edge technologies such as blockchain, AI, VR, and AR.
                  With years of experience and a team of skilled developers, we
                  are uniquely positioned to drive innovation in your business
                  and the broader IT landscape. Our handpicked experts are
                  committed to personal and professional growth, and we provide
                  them with comprehensive support to achieve excellence.
                </p>
                <p>
                  We foster a motivating environment that enables our employees
                  to thrive and reach their professional goals. Our reputation
                  is built on delivering high-quality solutions on time and
                  within budget, which has helped us forge strong, long-term
                  customer relationships. Each project is approached with a
                  personalized focus on the customer, ensuring that we find the
                  most effective and successful solutions. At Visionary AI
                  Technologies, we deeply value our customers and are dedicated
                  to exceeding their expectations in every project.
                </p>
              </div>

              <div className="btn-wrap mt-20">
                <Link to="/about" className="global-btn mt-xl-0 mt-20">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
