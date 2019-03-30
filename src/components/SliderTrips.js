import React, { Component } from "react";
import Slider from "react-slick";
import SliderTripItem from './SliderTripItem'


import img_slider_1 from '../img/tab-1.png'
import img_slider_2 from '../img/tab-2.png'
import img_slider_3 from '../img/tab-3.png'
import img_slider_4 from '../img/tab-4.png'
import img_slider_5 from '../img/tab-5.png'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: false
    };
    return (
      <div className="slider-trip-wrapper">
        <Slider {...settings}>
          <div>
            < SliderTripItem 
                imgUrl={img_slider_1}
                tr_title="Tower-of-London"
                tr_text="Take a tour with one of the Yeoman Warders around the Tower of London, one of the world's most famous buildings. "
            />
          </div>
          <div>
            < SliderTripItem 
                imgUrl={img_slider_2}
                tr_title="Tower-of-London"
                tr_text="Take a tour with one of the Yeoman Warders around the Tower of London, one of the world's most famous buildings. "
            />
          </div>
          <div>
            < SliderTripItem 
                imgUrl={img_slider_3}
                tr_title="Tower-of-London"
                tr_text="Take a tour with one of the Yeoman Warders around the Tower of London, one of the world's most famous buildings. "
            />
          </div>
          <div>
            < SliderTripItem 
                imgUrl={img_slider_4}
                tr_title="Tower-of-London"
                tr_text="Take a tour with one of the Yeoman Warders around the Tower of London, one of the world's most famous buildings. "
            />
          </div>
         <div>
            < SliderTripItem 
                imgUrl={img_slider_5}
                tr_title="Tower-of-London"
                tr_text="Take a tour with one of the Yeoman Warders around the Tower of London, one of the world's most famous buildings. "
            />
          </div>
          <div>
            < SliderTripItem 
                imgUrl={img_slider_1}
                tr_title="Tower-of-London"
                tr_text="Take a tour with one of the Yeoman Warders around the Tower of London, one of the world's most famous buildings. "
            />
          </div>
          
        </Slider>
      </div>
    );
  }
}