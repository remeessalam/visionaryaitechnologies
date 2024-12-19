import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { companyDetails } from "../../constant";
import logo from "../../assets/logo-min.png";
const Thankyou = () => {
  return (
    <div className="thankyou-container">
      <style>
        {`
          .thankyou-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: rgba(0, 0, 0, 0.2);
          }
          .thankyou-header {
            padding: 1rem 0;
            top: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px);
            color: white;
          }
          .thankyou-header-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2.5rem;
            padding-left: 1rem;
          }
          .thankyou-logo {
            height: 4rem;
          }
          .thankyou-logo-large {
            height: 5rem !important;
          }
          .thankyou-main {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 8rem 0;
            gap: 0.75rem;
            text-align: center;
            color: white;
          }
          .thankyou-heading {
            font-size: 2.5rem;
            font-weight: bold;
          }
          .thankyou-desc {
            font-size: 1rem;
            line-height: 1.5;
          }
          .thankyou-btn {
            display: inline-block;
            margin-top: 1rem;
            padding: 0.5rem 1.5rem;
            background-color: #1c65af;
            color: white;
            border-radius: 0.25rem;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .thankyou-btn:hover {
            background-color: #1c65af;
          }
          .thankyou-footer {
            padding: 3.5rem 0;
            background-color: #2e2e45;
            color: white;
          }
          .thankyou-footer-wrapper {
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
          }
          .thankyou-footer-section {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .thankyou-footer-logo {
            height: 4rem;
          }
          .thankyou-footer-logo-large {
            height: 5rem !important;
          }
          .thankyou-footer-desc {
            font-size: 0.875rem;
            text-align: center;
            margin-top: 1.25rem;
          }
          .thankyou-links {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .thankyou-links-heading {
            font-weight: 500;
            margin-bottom: 0.25rem;
          }
          .thankyou-link {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.875rem;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .thankyou-link:hover {
            color: #1c65af;
          }
          .thankyou-contact {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding:1rem;
          }
          .thankyou-contact-heading {
            font-size: 0.9rem;
            margin-bottom: 0.25rem;
          }
          .thankyou-contact-detail {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.875rem;
          }
          .thankyou-social {
            display: flex;
            justify-content: center;
            gap: 1.25rem;
            margin-top: 1.25rem;
          }
          .thankyou-social-icon {
            font-size: 1.25rem;
            color: rgba(128, 128, 128, 0.5);
            transition: all 0.3s ease;
          }
          .thankyou-social-icon:hover {
            color: #f0801c;
          }
        `}
      </style>
      <div className="thankyou-header">
        <div className="thankyou-header-wrapper">
          <Link to="/" className="thankyou-logo-link">
            <img
              src={logo}
              className="thankyou-logo thankyou-logo-large"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="thankyou-main">
        <h1 className="thankyou-heading">Thank You!</h1>
        <p className="thankyou-desc">
          We have received your message and will get back to you as soon as
          possible.
        </p>
        <Link to="/" className="thankyou-btn">
          Home
        </Link>
      </div>
      <div className="thankyou-footer">
        <div className="thankyou-footer-wrapper">
          <div className="thankyou-footer-section">
            <img
              src={logo}
              className="thankyou-footer-logo thankyou-footer-logo-large"
              alt=""
            />
            <p className="thankyou-footer-desc">
              We have rapidly grown into a trusted partner for organizations
              seeking digital transformation, enhanced operational efficiency.
            </p>
          </div>
          <div className="thankyou-footer-links">
            {/* <div className="thankyou-links">
              <h6 className="thankyou-links-heading">Quick Links</h6>
              {routes.map(({ name, path }) => (
                <Link key={path} to={path} className="thankyou-link">
                  {name}
                </Link>
              ))}
            </div> */}
            <div className="thankyou-contact">
              <h6 className="thankyou-contact-heading">Contact Us</h6>
              <div className="thankyou-contact-detail">
                <h6>Phone</h6>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="thankyou-link"
                >
                  {companyDetails.phone}
                </Link>
              </div>
              <div className="thankyou-contact-detail">
                <h6>Email</h6>
                <p>{companyDetails.email}</p>
              </div>
            </div>
          </div>
          <div className="thankyou-social">
            <Link>
              <BsFacebook className="thankyou-social-icon" />
            </Link>
            <Link>
              <BsTwitter className="thankyou-social-icon" />
            </Link>
            <Link>
              <BsLinkedin className="thankyou-social-icon" />
            </Link>
            <Link>
              <BsYoutube className="thankyou-social-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
