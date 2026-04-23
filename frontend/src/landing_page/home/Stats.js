import React from "react";

const Stats = () => {
  return (
    <div className="container py-5 margin" >
      <div className="row align-items-center">
        <div className="col-md-5">
          <h2 className="fw-semibold mb-5">Trust with confidence</h2>

          <div className="mb-5">
            <h5 className="fw-semibold">Customer-first always</h5>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-5">
            <h5 className="fw-semibold">No spam or gimmicks</h5>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <a href="#" className="text-primary text-decoration-none">
                Our philosophies
              </a>
            </p>
          </div>

          <div className="mb-5">
            <h5 className="fw-semibold">The Zerodha universe</h5>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="mb-4">
            <h5 className="fw-semibold">Do better with money</h5>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        <div className="col-md-7 text-center">
          <img
            src="/media/image/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
          <div className=" mt-4 mb-5 text-center">
            <a
              href="#"
              className="text-primary text-decoration-none me-4 fw-semibold"
            >
              Explore our products →
            </a>

            <a
              href="#"
              className="text-primary text-decoration-none fw-semibold"
            >
              Try Kite demo →
            </a>
          </div>
        </div>
        <img className=" p-0 m-auto mt-5"  style={{ width: "65%" }} src="\media\image\press-logos.png" alt="" />
      </div>
    </div>
  );
};

export default Stats;
