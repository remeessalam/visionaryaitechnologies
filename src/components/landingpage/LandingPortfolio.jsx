import React from "react";
import { portfolioDataApp, portfolioDataWeb } from "../../constant";
import "./landing.css";
const landingPortfolio = ({ page }) => {
  const portfolioData = page === "web" ? portfolioDataWeb : portfolioDataApp;
  return (
    <div className="wrapper">
      <div className="flex-container">
        <h2 className="heading">Our Portfolio</h2>
        <p className="description">
          Explore some of the successful projects we have delivered, showcasing
          our expertise across diverse domains. Here are some of our valued
          clients and the work we've done for them.
        </p>
      </div>
      <ul className="landingPortfolio-grid">
        {portfolioData.map((project, index) => (
          <li key={index} className="grid-item">
            <div className="image-container">
              <img src={project.image} alt={`${project.name} app preview`} />
              <strong>{project.name}</strong>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default landingPortfolio;
