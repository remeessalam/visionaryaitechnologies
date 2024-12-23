import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { companyDetails } from "../constant";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactInner = ({ page }) => {
  const [hover, setHover] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle form submission

  const onSubmit = async (data) => {
    console.log(data);
    setSpinner(true);

    var emailBody = "Name: " + data.name + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone: " + data.phone + "\n\n";
    emailBody += "Subject: " + data.subject + "\n\n";
    emailBody += "Message:\n" + data.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      // to: "remeesreme4u@gmail.com",
      subject: "You have a new message from visionary ai",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Email sent successfully");
        reset();
        navigate("/thank-you");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <>
      {page !== "landing" && (
        <>
          <div className="map-sec">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2s!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
              title="Bizmaster"
            />
          </div>

          <div className="contact-area space">
            <div className="container">
              <div className="contact-page-wrap bg-theme">
                <div className="row gy-40 align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="contact-info">
                      <div className="contact-info_icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="contact-info_details">
                        <h6 className="contact-info_title">Phone</h6>
                        <p className="contact-info_text">
                          <span>{companyDetails.phone}</span> <br />
                          {/* <span>01254693326</span> */}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-4 col-md-6">
                    <div className="contact-info">
                      <div className="contact-info_icon">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="contact-info_details">
                        <h6 className="contact-info_title">Location</h6>
                        <p className="contact-info_text">
                          4517 Washington Av Kentucky <br /> 39495
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-lg-6 col-md-6">
                    <div className="contact-info">
                      <div className="contact-info_icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="contact-info_details">
                        <h6 className="contact-info_title">Email</h6>
                        <p className="contact-info_text">
                          <span>{companyDetails.email}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div
        className="space-bottom"
        style={{ marginTop: page === "landing" && "5rem" }}
      >
        <div className="container">
          <div className="row gy-40 justify-content-between">
            <div className="col-lg-4">
              <div className="title-area mb-0">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Contact Us
                </span>
                <h2 className="sec-title style2" style={{ color: "black" }}>
                  Feel Free to Contact Us!
                </h2>
                <p className="mb-40">
                  Let's combine our development expertise with your innovative
                  ideas!!!
                </p>
                {/* <div className="social-btn style4">
                  <Link to={companyDetails.facebook} tabIndex={-1}>
                    <i
                      className="fab fa-facebook-f"
                      style={{ color: "black" }}
                    />
                  </Link>
                  <Link to={companyDetails.linkedin} tabIndex={-1}>
                    <i
                      className="fab fa-linkedin-in"
                      style={{ color: "black" }}
                    />
                  </Link>
                  <Link to={companyDetails.linkedin} tabIndex={-1}>
                    <i className="fab fa-twitter" style={{ color: "black" }} />
                  </Link>
                  <Link to={companyDetails.instagram} tabIndex={-1}>
                    <i
                      className="fab fa-instagram"
                      style={{ color: "black" }}
                    />
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    {/* Name Input */}
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control style-border"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <span style={{ color: "red" }}>
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="form-control style-border"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email format",
                          },
                        })}
                      />
                      {errors.email && (
                        <span style={{ color: "red" }}>
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    {/* Phone Number Input */}
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="form-control style-border"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9]+$/,
                            message: "Only numbers are allowed",
                          },
                        })}
                      />
                      {errors.phone && (
                        <span style={{ color: "red" }}>
                          {errors.phone.message}
                        </span>
                      )}
                    </div>

                    {/* Subject Input */}
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control style-border"
                        {...register("subject", {
                          required: "Subject is required",
                        })}
                      />
                      {errors.subject && (
                        <span style={{ color: "red" }}>
                          {errors.subject.message}
                        </span>
                      )}
                    </div>

                    {/* Message Textarea */}
                    <div className="col-12 form-group">
                      <textarea
                        placeholder="Message here.."
                        className="form-control style-border"
                        {...register("message", {
                          required: "Message is required",
                        })}
                      ></textarea>
                      {errors.message && (
                        <span style={{ color: "red" }}>
                          {errors.message.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 form-group mb-0">
                      <button
                        type="submit"
                        className="global-btn w-100"
                        style={{ color: hover ? "black" : "white" }}
                        onMouseOver={() => setHover(true)}
                        onMouseOut={() => setHover(false)}
                      >
                        Send Now
                        <img
                          src="assets/img/icon/right-icon.svg"
                          alt="Bizmaster"
                          style={{ marginLeft: "10px" }}
                        />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInner;
