import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CaroselComponent, CaroselTitle } from './carousel';

const items = [
  <CaroselComponent isSecond={false}>
    <CaroselTitle  >Стандарт</CaroselTitle>
  </CaroselComponent>,
  <CaroselComponent isSecond={document.querySelector('.alice-carousel__stage-item.__active') ? true : false}>
    <CaroselTitle  >Оптимум</CaroselTitle>
  </CaroselComponent>,
  <CaroselComponent isSecond={false}>
    <CaroselTitle  >Премиум</CaroselTitle>
  </CaroselComponent>,
];

const Carousel = () => (
  <AliceCarousel
    // autoPlay
    // autoPlayInterval={3000}
    // buttonsDisabled={true}
    mouseTracking
    items={items}
    infinite
    responsive={{ 0: { items: 1 }, 768: { items: 3 } }}
  />
);

export default Carousel;
