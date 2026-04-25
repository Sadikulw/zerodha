import React from "react";

import Hero from "./Hero";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import Universe from "./Universe";

const ProductsPage = () => {
  return (
    <>
      <Hero />

      <LeftSection
        imgURl="\media\image\kite.png"
        heading="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1=" Try demo → "
        link2="Learn more →"
      />
       <RightSection imgURl="\media\image\console.png" heading="Console" description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." link="Learn more  → " />

      <LeftSection
        imgURl="\media\image\coin.png"
        heading="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1=" Coin  → "
        link2=""
      />
      <RightSection imgURl="\media\image\kiteconnect.png" heading="Kite Connect API" description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." link="Kite Connect  → " />
       
     
      <LeftSection
        imgURl="\media\image\varsity.png"
        heading="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        
      />
<p className="text-center m-5 p-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
    </>
  );
};

export default ProductsPage;
