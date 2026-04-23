import React from "react";
const Pricing = () => {
  return (
    <div className="pricing-section py-5 ">
      <div className="container pricing-container margin">
        <div className="row">
        
          <div className="col-md-5">
            <h2 className="pricing-title fw-semibold">Unbeatable pricing</h2>

            <p className=" mt-4">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>

               <a
              href="#"
              className="text-primary text-decoration-none me-4 fw-semibold"
            >
              See pricing →
            </a>

          </div>

          <div className="col-md-7  mt-4">
            <div className=" row">
              <div className=" col-4">
                <div className="row">
                  <div className="col-8 p-0">
                    <img src="/media/image/pricing0.svg" alt="0" />
                  </div>

                  <div
                    className="col-4 mt-5 p-0 "
                    style={{ fontSize: "70%", marginLeft: "-28px" }}
                  >
                    <p>
                      Free account <br /> opening
                    </p>
                  </div>
                </div>
              </div>

              <div className=" col-4"   style={{ marginLeft: "-28px" }}>
                <div className="row">
                  <div className="col-8 p-0">
                    <img src="/media/image/pricing0.svg" alt="0" />
                  </div>

                  <div
                    className="col-4 mt-5 p-0 "
                    style={{ fontSize: "70%", marginLeft: "-24px" }}
                  >
                    <p>Free equity delivery <br /> and direct mutual funds</p>
                  </div>
                </div>
              </div>

              <div className=" col-4">
                <div className="row">
                  <div className="col-8 p-0">
                    <img src="/media/image/intradayTrades.svg" alt="0" />
                  </div>

                  <div
                    className="col-4 mt-5 p-0 "
                    style={{ fontSize: "70%", marginLeft: "-10px" }}
                  >
                    <p>
                      Intraday and <br />
F&O
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
