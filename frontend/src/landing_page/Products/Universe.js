import React from "react";

const Universe = () => {
  return (
    <div className="container text-center margin" style={{ padding: "80px 0" }}>
      <h3 style={{ fontWeight: "500" }}>The Zerodha Universe</h3>

      <p
        style={{
          color: "#6c757d",
          marginTop: "15px",
          marginBottom: "60px",
          fontSize: "16px",
        }}
      >
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row text-center">
        <div className="col-md-4 mb-5">
          <img
            src="/media/image/zerodhaFundhouse.png"
            alt=""
            style={{ height: "50px" }}
          />
          <p
            className="mt-3"
            style={{
              fontSize: "12px",
              color: "#6c757d",
              maxWidth: "260px",
              margin: "auto",
            }}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/media/image/sensibullLogo.svg"
            alt=""
            style={{ height: "50px" }}
          />
          <p
            className="mt-3"
            style={{
              fontSize: "12px",
              color: "#6c757d",
              maxWidth: "260px",
              margin: "auto",
            }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/media/image/tijori.svg"
            alt=""
            style={{ height: "50px" }}
          />
          <p
            className="mt-3"
            style={{
              fontSize: "12px",
              color: "#6c757d",
              maxWidth: "260px",
              margin: "auto",
            }}
          >
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/media/image/streakLogo.png"
            alt=""
            style={{ height: "50px" }}
          />
          <p
            className="mt-3"
            style={{
              fontSize: "12px",
              color: "#6c757d",
              maxWidth: "260px",
              margin: "auto",
            }}
          >
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/media/image/smallcaseLogo.png"
            alt=""
            style={{ height: "50px" }}
          />
          <p
            className="mt-3"
            style={{
              fontSize: "12px",
              color: "#6c757d",
              maxWidth: "260px",
              margin: "auto",
            }}
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/media/image/dittoLogo.png"
            alt=""
            style={{ height: "50px" }}
          />
          <p
            className="mt-3"
            style={{
              fontSize: "12px",
              color: "#6c757d",
              maxWidth: "260px",
              margin: "auto",
            }}
          >
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <button className="btn  fw-bold btn-zerodha  mt-3 px-5  text-white  fs-7 ">
        Sign up for free
      </button>
    </div>
  );
};

export default Universe;
