import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiperStyles.css';
import { Text } from '../Text/Text';

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
        <SwiperSlide className='swiperComponent'>
          <h3>Стандарт</h3>
          <Text bigger>(из коробки)</Text> <h2>₽15 000</h2>
          <Text>в месяц</Text> <button className="buttonPrices">Запрос</button>{' '}
        </SwiperSlide>
        <SwiperSlide className='swiperComponent'>
          {' '}
          <h3>Оптимум</h3>
          <Text bigger>+1 коннектор, отчет</Text>
          <h2>₽35 000</h2>
          <Text>в месяц</Text>
          <button className="buttonPrices">Запрос</button>
        </SwiperSlide>
        <SwiperSlide className='swiperComponent'>
          {' '}
          <h3>Премиум</h3>
          <Text bigger>настройка под вас</Text>
          <h2>?</h2>
          <Text>все обсуждается</Text>
          <button className="buttonPrices">Запрос</button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
