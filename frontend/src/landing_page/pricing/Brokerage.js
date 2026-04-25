import React from "react";

const Brokerage = () => {
    const charges = [
    "Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.",
    "Digital contract notes will be sent via e-mail.",
    "Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.",
    "For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).",
    "For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).",
    "If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order."
  ];

  return (
    <div className="container py-5 margin">
      <hr />
      <div className="row pt-5">
        {/* Left Section */}
        <div className="col-md-8">
          <h3 className="text-primary mb-4 text-center">Brokerage calculator</h3>
          <ul className="list-group list-group-flush">
            {charges.map((item, index) => (
              <li key={index} className="list-group-item fs-6">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          <h3 className="text-primary mb-4 text-center">
            List of charges
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;