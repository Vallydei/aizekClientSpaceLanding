import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiperStyles.css';
import { Text } from '../Text/Text';

const swiperProps = [
  { id: 1, tarif: 'Стандарт', features: '(из коробки)', price: '₽15 000', period: 'в месяц' },
  { id: 2, tarif: 'Оптимум', features: '+1 коннектор, отчет', price: '₽35 000', period: 'в месяц' },
  { id: 3, tarif: 'Премиум', features: 'настройка под вас', price: '?', period: 'все обсуждается' },
];

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        className="footerSwiper"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        slidesPerView={1.3}
        spaceBetween={20}
        breakpoints={{
          960: {
            enabled: false,
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
        }}
      >
        {swiperProps.map((slide) => (
          <SwiperSlide className="swiperComponent" key={slide.id}>
            <h3>{slide.tarif}</h3>
            <Text bigger>{slide.features}</Text> <h2>{slide.price}</h2>
            <Text>{slide.period}</Text> <button className="buttonPrices">Запрос</button>{' '}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
