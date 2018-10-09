import React, { Component } from 'react'
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

export default class ParentCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="https://storage.googleapis.com/public-1234/portfolio/2018-FIFA-World-Cup-Russia-banner.png" alt="carousel" />
          <p className="legend">YouGoal FIFA World Cup 2018</p>
        </div>
        <div>
          <img src="https://storage.googleapis.com/public-1234/portfolio/FIFA-banner.jpg" alt="carousel" />
          <p className="legend">Player and Team Performance Rating Aggregator</p>
        </div>
      </Carousel>
    );
  }
}