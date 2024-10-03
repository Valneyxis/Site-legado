import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Importando Swiper e SwiperSlide
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Importando módulos necessários
import 'swiper/swiper-bundle.css'; // Importando estilos do Swiper
import '../css/Hero.css';

// Importando estilos adicionais do Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Hero = () => {
  return (
    <section className="hero" data-aos="fade-up">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} 
        spaceBetween={30} 
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={false}
        loop={true} 
      >
        <SwiperSlide>
          <img src="/img/foto1.jpeg" alt="Banner 1" className="carousel-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/foto2.jpg" alt="Banner 2" className="carousel-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/foto3.jpg" alt="Banner 3" className="carousel-image" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
