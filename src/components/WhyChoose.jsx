import React from "react";

const WhyChoose = () => {
  return (
    <div className="wcu-area-2 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center me-xl-4 ms-xl-4">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Why Choose Us ?
              </span>
              <p className=" " style={{ color: "black" }}>
                Visionary AI Technologies stands out as a leading Web App
                Development company, renowned for helping clients reimagine
                their digital future. With our extensive experience and
                expertise, we adeptly manage even the most complex projects,
                delivering exceptional results with competence and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="wcu-thumb">
              <div className="wcu-thumb-1">
                <img src="assets/img/normal/wcu-thumb-1-1.jpg" alt="img" />
              </div>
              <div className="wcu-shape jump">
                <img src="assets/img/normal/1.png" alt="img" />
              </div>
              <div className="wcu-shape2 movingX">
                <img src="assets/img/normal/2.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="wcu-card-wrap">
              <div className="wcu-card">
                {/* <div className="icon">
                  <img src="assets/img/icon/wcu-icon_2-1.svg" alt="img" />
                </div> */}
                <div className="wcu-card-details">
                  <h4
                    className="wcu-card-title"
                    style={{ color: "black", marginTop: "1rem" }}
                  >
                    97% Success Ratio
                  </h4>
                  <p className="wcu-card-text">
                    We prioritize and fulfill every development requirement with
                    at most care and attention as we know how important it is
                    for you.{" "}
                  </p>
                </div>
              </div>
              <div className="wcu-card">
                {/* <div className="icon">
                  <img src="assets/img/icon/wcu-icon_2-2.svg" alt="img" />
                </div> */}
                <div className="wcu-card-details">
                  <h4
                    className="wcu-card-title"
                    style={{ color: "black", marginTop: "1rem" }}
                  >
                    Agile Approach
                  </h4>
                  <p className="wcu-card-text">
                    At Visionary AI Technologies, we offer the most feature-rich
                    solution with the collaborative effort of self-organizing
                    and cross-functional teams.
                  </p>
                </div>
              </div>
              <div className="wcu-card">
                {/* <div className="icon">
                  <img src="assets/img/icon/wcu-icon_2-3.svg" alt="img" />
                </div> */}
                <div className="wcu-card-details">
                  <h4
                    className="wcu-card-title"
                    style={{ color: "black", marginTop: "1rem" }}
                  >
                    Affordable Price
                  </h4>
                  <p className="wcu-card-text">
                    We give equal attention to the price range and quality of
                    the solution to deliver the quality solution at an
                    affordable price range.{" "}
                  </p>
                </div>
              </div>
              <div className="wcu-card">
                {/* <div className="icon">
                  <img src="assets/img/icon/wcu-icon_2-4.svg" alt="img" />
                </div> */}
                <div className="wcu-card-details">
                  <h4
                    className="wcu-card-title"
                    style={{ color: "black", marginTop: "1rem" }}
                  >
                    Enhanced Development Knowledge
                  </h4>
                  <p className="wcu-card-text">
                    Our developers keep themselves knowledgeable about all the
                    latest development tech trends to deliver the best possible
                    solution.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
