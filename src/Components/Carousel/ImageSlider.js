import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './ImageSlider.css';
import Img1 from '../../Assets/img-2.jpg';
import Img2 from '../../Assets/img-3.jpg';
import Img3 from '../../Assets/img-4.jpg';


const ImageSlider = () => {
  return (
    <div>
      <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={Img1} className="sliderimg"/>
      <img src={Img2} className="sliderimg"/>
      <img src={Img3} className="sliderimg"/>
      
    </AliceCarousel>
    </div>
  );
}

export default ImageSlider;