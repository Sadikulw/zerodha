import React, { useState } from "react";

const data = [
  { title: "Account Opening", icon: "fa-plus" },
  { title: "Your Zerodha Account", icon: "fa-user" },
  { title: "Kite", icon: "fa-chart-line" },
  { title: "Funds", icon: "fa-indian-rupee-sign" },
  { title: "Console", icon: "fa-circle-notch" },
  { title: "Coin", icon: "fa-clock" },
];

const CreateTicket = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container mt-4 margin">
      <div className="row">
        
   
        <div className="col-md-8">
          {data.map((item, index) => (
            <div key={index} className="mb-3">
              
              
              <div
                className="d-flex justify-content-between align-items-center p-3 border rounded"
                style={{ cursor: "pointer", background: "#f8f9fa" }}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="d-flex align-items-center gap-3">
                  
                 
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "#e9ecef",
                      borderRadius: "8px",
                    }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <i className={`fa-solid ${item.icon} text-primary`}></i>
                  </div>

                  <h5 className="mb-0">{item.title}</h5>
                </div>

                {/* Arrow */}
                <i
                  className={`fa-solid ${
                    openIndex === index
                      ? "fa-chevron-up"
                      : "fa-chevron-down"
                  } text-primary`}
                ></i>
              </div>

              {/* Content */}
              {openIndex === index && (
                <div className="p-3 border border-top-0 rounded-bottom">
                  <p>Content for {item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>

   
        <div className="col-md-4">
          
         
          <div
            className="p-3 mb-4"
            style={{
              background: "#f5e6d3",
              borderLeft: "5px solid orange",
            }}
          >
            <ul className="mb-0">
              <li>Latest Intraday leverages and Square-off timings</li>
              <li>Rights Entitlements listing in April 2026</li>
            </ul>
          </div>

         
          <div className="border rounded">
            <div className="p-3 border-bottom fw-bold">
              Quick links
            </div>

            <div className="p-3 border-bottom text-primary">
              1. Track account opening
            </div>
            <div className="p-3 border-bottom text-primary">
              2. Track segment activation
            </div>
            <div className="p-3 border-bottom text-primary">
              3. Intraday margins
            </div>
            <div className="p-3 border-bottom text-primary">
              4. Kite user manual
            </div>
            <div className="p-3 text-primary">
              5. Learn how to create a ticket
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreateTicket;