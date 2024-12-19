import React from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as WhatsApp } from "../assets/svgs/WhatsappIcon.svg";
import { ReactComponent as WhatsApp } from "../assets/WhatsappIcon.svg";
import { companyDetails } from "../constant";

const WhatsAppIcon = () => {
  return (
    <>
      <style>
        {`
          .fixed-link {
            position: fixed;
            bottom: 6.5rem;
            right: 1.9rem;
            z-index: 30;
            background-color: white;
            border-radius: 50%;
            transition: all 0.2s ease-in-out;
          }

          .fixed-link:hover {
            transform: translateY(-0.25rem);
          }

          .whatsapp-icon {
            width: 3rem;
            height: 3rem;
            fill: #22c55e; /* Green color */
            border-radius: 50%;
            box-shadow: 0 0 0 transparent, 0px 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-in-out;
          }

          .whatsapp-icon:hover {
            fill: #22c55e; /* Primary hover color */
            transform: scale(1.1);
          }

          @media (min-width: 640px) {
            .whatsapp-icon {
              width: 4rem;
              height: 4rem;
            }
          }
        `}
      </style>
      <Link
        className="fixed-link"
        to={`https://wa.me/${companyDetails.whatsappbox}`}
        target="_blank"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsApp className="whatsapp-icon" />
      </Link>
    </>
  );
};

export default WhatsAppIcon;
