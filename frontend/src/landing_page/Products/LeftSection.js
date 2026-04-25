import React from "react";

const LeftSection = ({ imgURl, heading, description, link1, link2 }) => {
  return (
    <div className=" container margin ">
      <div className="row">
        <div className="col-7 ">
          <img className="img-fluid" src={imgURl} alt="" />
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <h4 className=" mt-5">{heading}</h4>
          <p className=" pt-3">{description}</p>
          { link1 || link2 ? ( <div className=" fs-5 mt-5 ">
            <a className=" text-decoration-none me-5  " href={link1}>
              {link1}
            </a>
            <a className=" text-decoration-none " href={link2}>
              {link2}
            </a>
          </div>) : null }
         
          <div>
            <div className="row  mt-4">
              <div className="col-6">
                <img
                  className="img-fluid"
                  src="/media/image/googlePlayBadge.svg"
                  alt="Google Play"
                  style={{ maxWidth: "140px" }}
                />
              </div>

              <div className="col-6">
                <img
                  className="img-fluid"
                  src="/media/image/appstoreBadge.svg"
                  alt="App Store"
                  style={{ maxWidth: "140px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
