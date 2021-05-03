import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import task from './../../../asset/img/Accept tasks-bro 1.png';
import management from './../../../asset/img/Time management-pana 1.png'
import time from './../../../asset/img/Time management-cuate 1.png'
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay:true,
      infinite:true,
    };
    return (
      <div className='carousel-div'>
        <Slider {...settings}>
          <div className='slide-wrapper'><img src={management} width='100%' alt='hero'/></div>
          <div className='slide-wrapper'><img src={time} width='100%' alt='hero'/></div>
          <div className='slide-wrapper'><img src={task} width='100%' alt='hero'/></div>
        </Slider>
     </div>
    );
  }
};
