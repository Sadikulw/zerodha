import React from "react";

const Team = () => {
  return (
    <div >
      <h3 className="  text-center mt-5 mb-5">People</h3>
      <div className=" container margin">
        <div className="row ">
          <div className="col">
            <div className="text-center">
              <img
                src="\media\image\nithinKamath.jpg"
                className="rounded-circle"
                width="300"
                alt="profile"
              />
              <p className="mt-4 fw-bold">Nithin Kamath</p>
              <p className="  text-muted">Founder, CEO</p>
            </div>
          </div>
          <div className="col-5 fs-6 " style={{marginLeft:"-150px",marginRight:"100px"}}>
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>

            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>

            <p>Playing basketball is his zen.</p>

            <p>Connect on <a href="" className=" text-decoration-none  fw-bold">Homepage /</a>  <a href="" className=" text-decoration-none  fw-bold">TradingQnA  /</a> <a href="" className=" text-decoration-none  fw-bold">Twitter  </a> </p>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Team;
