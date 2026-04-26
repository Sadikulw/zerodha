import React from "react";

const Hero = () => {
  return (
    <div className="bg-light pt-2 pb-2 rounded-3">
    <div className=" container margin ">
      <div className=" mt-4 mb-5 ">
        <div className=" d-flex  justify-content-between">
          <h1 className=" fw-semibold">Suppory Portal</h1>
          <button className="btn btn-primary px-4 py-2 mt-3">My Tickets</button>
        </div>
        <div className="position-relative mt-5">
          
          <i
            className="fa-solid fa-magnifying-glass position-absolute"
            style={{
              top: "50%",
              left: "15px",
              transform: "translateY(-50%)",
              color: "#6c757d",
              fontSize: "16px",
            }}
          ></i>

        
          <input
            type="text"
            className="form-control ps-5 py-3"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
            style={{
              borderRadius: "8px",
              border: "1px solid #dee2e6",
            }}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
