import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";
import img7 from "../../../assets/home/banner.jpg";

const images=[img1,img2,img3,img4,img5,img6,img7]

const Banner = () => {
  return (
    <Carousel className="mt-0"
      autoPlay
      interval={8000}     
      infiniteLoop
      showThumbs={false}
      showStatus={false}>
     {images.map(img=><div>
        <img className="h-[460px]" src={img} alt="" />
     </div>)}
    </Carousel>
  );
};

export default Banner;
