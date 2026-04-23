import React from "react";

const Hero = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center ">
        <div className="col text-center ">
          <img
            src="/media/image/homeHero.png"
            alt="Hero"
            className="img-fluid p-5 w-75"
          />
          <h1 className=" fs-2">Invest in everything</h1>
          <p className="text-muted mt-3 fs-5">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more.
          </p>

          <button className="btn   mt-3 px-5 py-2 text-white  fs-7 "style={{background:"#387ED1"}}>
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
