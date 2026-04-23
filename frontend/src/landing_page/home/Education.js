import React from "react";

const Education = () => {
  return (
    <div className="container margin mt-5">
      <div className="row">
        <div className="col-6" style={{marginLeft:"-30px"}}>
          <img src="media\image\education.svg" alt="" />
        </div>
        <div className="col-6 mt-5">
          <h4 className="mb-5 fw-semibold">Free and open market education</h4>
          <div>
            <p className="text-muted">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a
              href="#"
              className=" text-primary text-decoration-none me-4 fw-semibold"
            >
              Varsity →
            </a>
          </div>
          <div className="mt-5">
            <p className=" text-muted">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a
              href="#"
              className=" text-primary text-decoration-none me-4 fw-semibold"
            >
              TradingQ&A →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
