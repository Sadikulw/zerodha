import React from "react";

const Hero = () => {
  return (
    <div className=" container py-5  margin">
      <div className=" text-center mt-5 ">
 <h2>Zerodha Products</h2>
      <p className=" fs-5 text-muted ">Sleek, modern, and intuitive trading platforms</p>
      <p className="pt-2 text-muted" >
        Check out our <a className=" text-decoration-none " href="">investment offerings →</a>
      </p>
      </div>
     <hr  className=" opacity-25  border-secondary  pt-5" style={{marginTop: "120px"}}/>
    </div>
  );
};

export default Hero;
