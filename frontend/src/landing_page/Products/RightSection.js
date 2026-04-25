import React from "react";

const RightSection = ({ heading, description, link, imgURl }) => {
  return (
    <div className="  container margin">
      <div className="row ">
        <div className="col-6 flex-column mt-3 d-flex justify-content-center">
         <h4 className=" mt-5">{heading}</h4>
          <p className=" pt-3">{description}</p>
          {link  ? (
            <div className=" fs-5 mt-5 ">
              <a className=" text-decoration-none me-5  " href={link}>
                {link}
              </a>
            </div>
          ) : null}
        </div>
        <div className="col-6">
         
            <img src={imgURl} alt=""  className=" img-fluid"/>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
