import React from 'react'

const Carousel = (trending) => {
  trending.map((trending, index) => (
    <img src={trending.images.fixed_height.url} key={index} alt="broked" />
  ));
}

export default Carousel
