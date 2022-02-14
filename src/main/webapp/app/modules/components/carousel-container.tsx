import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// todo: add interface

const CarouselContainer = props => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={props.deviceType !== 'mobile'}
      autoPlaySpeed={3000}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      centerMode={false}
      deviceType={props.deviceType}
      draggable
      focusOnSelect={false}
      infinite={true}
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      }}
      showDots={false}
      swipeable
    >
      {props.children}
    </Carousel>
  );
};

export default CarouselContainer;
