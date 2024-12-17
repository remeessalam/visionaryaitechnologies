import React from "react";
import Slider from "react-slick";

const TestimonialOne = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="TestimonialOne-icon-box-next">
        <button
          onClick={onClick}
          className="slick-arrow style2 default team-slider2-next"
        >
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="TestimonialOne-icon-box-prev">
        <button
          onClick={onClick}
          className="team-slider2 slick-arrow style2 default team-slider2-prev"
        >
          <i className="fas fa-arrow-left" />
        </button>
      </div>
    );
  }
  let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {},
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="testimonial-area-1  overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="title-area">
              <span className="sub-title" style={{ color: "black" }}>
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Clients Testimoniall
              </span>
              <h2 className="sec-title style2" style={{ color: "black" }}>
                Reviews from Global Leaders
              </h2>
            </div>
            <div className="testimonial-thumb1">
              <img src="assets/img/testimonial/testimonial-1-1.jpg" alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="title-area">
              <p className="testi-desc">
                I was truly impressed with the experience! The team exceeded my
                expectations with their professionalism and attention to detail.
                Their support made a significant difference, and I felt valued
                every step of the way. I highly recommend them to anyone looking
                for reliable and quality service
              </p>
            </div>
            <div className="testi-area-slider">
              <div className="row global-carousel testi-slider-1">
                <Slider {...settings}>
                  <div className="p-2">
                    <div className="testi-card">
                      <div className="testi-card_content">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p
                          className="testi-card_text"
                          style={{ color: "black" }}
                        >
                          The client appreciates being able to speak in layman
                          terms to Visionary AI Technologies's project manager.
                          Their technical knowledge and suggestions influenced
                          the evolution of the client's vision.
                        </p>
                        <div className="testi-card-profile">
                          <div className="testi-profile_thumb">
                            <img
                              src="assets/img/testimonial/testi-thumb_1.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="testi-card-profile-details">
                            <h4
                              className="testi-profile-title"
                              style={{ color: "black" }}
                            >
                              Ben Convery
                            </h4>
                            <span className="testi-profile-desig">
                              President
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="quote-icon">
                        <img src="assets/img/icon/quote1-1.svg" alt="img" />
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="testi-card">
                      <div className="testi-card_content">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p
                          className="testi-card_text"
                          style={{ color: "black" }}
                        >
                          Visionary AI Technologies is dependable and responsive
                          to client’s request. Always easy and convenient to
                          communicate with them for any issues and support.
                          Gladly recommend them to anyone who wants to build
                          ideas into real products.
                        </p>
                        <div className="testi-card-profile">
                          <div className="testi-profile_thumb">
                            <img
                              src="assets/img/testimonial/testi-thumb_1.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="testi-card-profile-details">
                            <h4
                              className="testi-profile-title"
                              style={{ color: "black" }}
                            >
                              John M.{" "}
                            </h4>
                            <span className="testi-profile-desig">
                              Founder & Owner
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="quote-icon">
                        <img src="assets/img/icon/quote1-1.svg" alt="img" />
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="testi-card">
                      <div className="testi-card_content">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p
                          className="testi-card_text"
                          style={{ color: "black" }}
                        >
                          To the teams of Visionary AI Technologies - excellent
                          job done with very smooth and responsive
                          communication! The teams are very knowledgeable and
                          had given us lots of valuable advices.
                        </p>
                        <div className="testi-card-profile">
                          <div className="testi-profile_thumb">
                            <img
                              src="assets/img/testimonial/testi-thumb_1.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="testi-card-profile-details">
                            <h4
                              className="testi-profile-title"
                              style={{ color: "black" }}
                            >
                              Sarah L.
                            </h4>
                            <span className="testi-profile-desig">
                              Founder & Owner{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="quote-icon">
                        <img src="assets/img/icon/quote1-1.svg" alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="testi-card">
                      <div className="testi-card_content">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p
                          className="testi-card_text"
                          style={{ color: "black" }}
                        >
                          The apps meet high-quality standards and include many
                          robust features. Visionary AI Technologies is clearly
                          invested in the project's success. The team suggests
                          creative ideas, shares detailed progress reports, and
                          always delivers on time.
                        </p>
                        <div className="testi-card-profile">
                          <div className="testi-profile_thumb">
                            <img
                              src="assets/img/testimonial/testi-thumb_1.jpg"
                              alt="img"
                            />
                          </div>
                          <div className="testi-card-profile-details">
                            <h4
                              className="testi-profile-title"
                              style={{ color: "black" }}
                            >
                              James Orby{" "}
                            </h4>
                            <span className="testi-profile-desig">
                              Founder & Owner{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="quote-icon">
                        <img src="assets/img/icon/quote1-1.svg" alt="img" />
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
