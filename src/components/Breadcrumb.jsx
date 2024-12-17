import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div className="breadcumb-wrapper">
      {/* bg animated image/ */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title" style={{ color: "black" }}>
                {title}
              </h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/" style={{ color: "black" }}>
                    Home
                  </Link>
                </li>
                <li className="active" style={{ color: "black" }}>
                  {title}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 d-lg-block d-none">
            <div className="breadcumb-thumb">
              {title === "About Us" && (
                <img src="assets/img/normal/breadcrumb-thumb.jpg" alt="img" />
              )}
              {title === "Service" && (
                <img src="assets/img/normal/servicebanner.jpg" alt="img" />
              )}
              {title === "Contact" && (
                <img src="assets/img/normal/contactbanner.jpg" alt="img" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
