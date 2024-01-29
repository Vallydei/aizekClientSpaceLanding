import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import styles from './logoSwiperStyles.module.css';

export default function LogoSwiper() {
  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    const logosList: string[] = [];
    const filePath = './img/partners';
    for (let i = 0; i <= 11; ++i) {
      const fileName = i;
      logosList.push(`${filePath}/${fileName}.png`);
      console.log(logosList);
    }
    setLogos(logosList);
  }, []);

  return (
    <Swiper
      id="data"
      className={styles.container}
      modules={[Autoplay]}
      effect="coverflow"
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      enabled={true}
      slidesPerView={7}
      spaceBetween={20}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
      }}
      breakpoints={{
        960: {
          enabled: false,
          slidesPerView: 12,
          spaceBetween: 20,
        },
      }}
    >
      {logos.map((logoName, index) => (
        <SwiperSlide className={styles.partnersLogos} key={index}>
          <img src={logoName} alt={`Partner Logo ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
