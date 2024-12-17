import React from "react";
import { Link } from "react-router-dom";

const PortfolioOne = () => {
  return (
    <div className="portfolio-area-1 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Latest Portfolio
              </span>
              <h2 className="sec-title style2" style={{ color: "black" }}>
                The Tech-Solutions We Have Created For Our Clients.
              </h2>
            </div>
          </div>
        </div>
        <div className="row gx-30">
          <div className="col-lg-6 portfolio-card-wrap">
            <div className="portfolio-card">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/1-min.webp" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    PartEx
                  </span>
                  <p
                    // className="portfolio-card-details_title"
                    style={{ color: "black" }}
                  >
                    {/* <Link to="/project-details"> */}
                    Partex is a B2B e-commerce marketplace, and is on a journey
                    to become the most reliable and largest online marketplace
                    for auto components buyers.
                    {/* </Link> */}
                  </p>
                </div>
                {/* <Link to="/project-details" className="icon-btn">
                  <img
                    src="assets/img/icon/arrow-up-right.svg"
                    alt="Bizmaster"
                  />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 portfolio-card-wrap">
            <div className="portfolio-card">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/2-min.webp" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Hailz{" "}
                  </span>
                  <p
                    // className="portfolio-card-details_title"
                    style={{ color: "black" }}
                  >
                    {/* <Link to="/project-details"> */}
                    Welcome to Hailz, the reliable ride-hailing and delivery app
                    that connects you with experienced drivers whenever and
                    wherever you need them, including in New York City.
                    {/* </Link> */}
                  </p>
                </div>
                {/* <Link to="/project-details" className="icon-btn"> */}
                {/* <img src="assets/img/icon/arrow-up-right.svg" alt="Bizmaster" /> */}
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 portfolio-card-wrap">
            <div className="portfolio-card">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/3-min.webp" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Glowsy{" "}
                  </span>
                  <p
                    // className="portfolio-card-details_title"
                    style={{ color: "black" }}
                  >
                    {/* <Link to="/project-details"> */}
                    Glowsy is one of the fastest growing aesthetic software
                    which provides a platform for patients to connect with the
                    best doctor for all the aesthetic concerns across the
                    country. {/* </Link> */}
                  </p>
                </div>
                {/* <Link to="/project-details" className="icon-btn">
                  <img
                    src="assets/img/icon/arrow-up-right.svg"
                    alt="Bizmaster"
                  />
                </Link> */}
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6 portfolio-card-wrap">
            <div className="portfolio-card">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/1-4.png" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Profitability Maximizers
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <Link to="/project-details">
                      Market Analysis and Strategy
                    </Link>
                  </h4>
                </div>
                <Link to="/project-details" className="icon-btn">
                  <img
                    src="assets/img/icon/arrow-up-right.svg"
                    alt="Bizmaster"
                  />
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioOne;
