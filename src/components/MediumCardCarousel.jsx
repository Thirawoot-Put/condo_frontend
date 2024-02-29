import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MediumCardCarousel({ children }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return <Slider {...settings}>{children}</Slider>;
}
