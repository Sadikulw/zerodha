import React from "react";

const Hero = () => {
  return (
    <div className="container margin ">
      <div
        className="text-center  "
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <h4 className=" text-center ">
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h4>
      </div>
      <hr className=" opacity-25" />
      <div className="row justify-content-center">
        <div className="col-md-5 lh-lg  fs-6">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-md-5  fs-6">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <a href="" className=" text-decoration-none">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="" className=" text-decoration-none">
              {" "}
              blog
            </a>{" "}
            or see what the media is{" "}
            <a href="" className=" text-decoration-none">
              saying about us or{" "}
            </a>
            learn more about our business and product{" "}
            <a href="" className=" text-decoration-none">
              {" "}
              philosophies.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
