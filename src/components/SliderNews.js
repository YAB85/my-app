import React, { Component } from "react";
import Slider from "react-slick";
import SliderNewsItem from './SliderNewsItem'


import img_slider_1 from '../img/slider_1.jpg'
import img_slider_2 from '../img/slider_2.jpg'
import img_slider_3 from '../img/slider_3.jpg'


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 10,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slider">
            <SliderNewsItem 
              imgUrl={img_slider_1}
              sl_title="Exploring the food in the heart of the London"
              sl_text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s"
              sl_auth="by Hannah"
            />
          </div>
          <div className="slider">
            <SliderNewsItem 
              imgUrl={img_slider_2}
              sl_title="The history and architecture of England"
              sl_text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "
              sl_auth="by Noelle Garza"
            />
          </div>
          <div className="slider">
            <SliderNewsItem 
              imgUrl={img_slider_3}
              sl_title="London is the political, economic and cultural capital of Britain."
              sl_text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s"
              sl_auth="by Hannah"
            />
          </div>
          <div className="slider">
            <SliderNewsItem 
              imgUrl={img_slider_1}
              sl_title="London's world-class tourist attractions"
              sl_text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "
              sl_auth="by Noelle Garza"
            />
          </div>
          <div className="slider">
            <SliderNewsItem 
              imgUrl={img_slider_2}
              sl_title="the Palace of Westminster "
              sl_text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s"
              sl_auth="by Hannah"
            />
          </div>
          <div className="slider">
            <SliderNewsItem 
              imgUrl={img_slider_3}
              sl_title="Maritime Greenwich and the Royal Botanic Gardens"
              sl_text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "
              sl_auth="by Noelle Garza"
            />
          </div>
        </Slider>
      </div>
    );
  }
}