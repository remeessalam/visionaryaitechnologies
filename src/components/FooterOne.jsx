import React from "react";
import { Link } from "react-router-dom";
import { companyDetails, services } from "../constant";

const FooterOne = () => {
  return (
    <footer
      className="footer-wrapper footer-layout1"
      style={{
        backgroundImage: "url(assets/img/bg/footer-bg1-1.png)",
        background: "#7c84a7",
      }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-5">
              <div className="widget footer-widget widget-about">
                <div className="about-logo">
                  <Link to="/">
                    <img
                      src="assets/img/logo-min.png"
                      alt="Laun"
                      style={{ width: "16rem" }}
                    />
                  </Link>
                </div>
                <p className="footer-text mb-30">
                  Delivering innovative software solutions to drive your digital
                  success. Let's build the future together.
                </p>
                <div className="social-btn style3">
                  <Link to={companyDetails.instagram} tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to={companyDetails.linkedin} tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to={companyDetails.twitter} tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to={companyDetails.facebook} tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Useful Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    {services.map((obj) => (
                      <li>
                        <Link to="/service">{obj.title}</Link>
                      </li>
                    ))}
                    {/* <li>
                      <Link to="/service">Software Corner</Link>
                    </li>
                    <li>
                      <Link to="/service">Application Center</Link>
                    </li>
                    <li>
                      <Link to="/service">Research Section</Link>
                    </li>
                    <li>
                      <Link to="/service">Developing Corner</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget me-xl-3">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <i className="fas fa-phone-alt" />
                    <div className="contact-grid-details">
                      <h6>
                        <Link to="#">{companyDetails.phone}</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <i className="fas fa-envelope" />
                    <div className="contact-grid-details">
                      <h6>
                        <Link to="#">{companyDetails.email}</Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                  {/* <div className="widget-contact-grid">
                    <i className="fas fa-map-marker-alt" />
                    <div className="contact-grid-details">
                      <h6>
                        1212, Lav Vegas, The Veg Street, USA
                        <p />
                      </h6>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="copyright-wrap">
          <div className="row gy-3 justify-content-lg-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link to="/">Visionary Ai Technologies </Link> 2024 | All
                Rights Reserved
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link to="/contact">Privacy</Link>
                <Link to="/contact">Terms</Link>
                <Link to="/contact">Sitemap</Link>
                <Link to="/contact">Help</Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default FooterOne;
