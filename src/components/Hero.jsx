import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/swiper-bundle.css'; 
import '../css/Hero.css';
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
        effect='fade'
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={false}
        loop={true} 
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
        }}
      >
        <SwiperSlide>
          <div className="carousel-overlay">
            <img src="/img/foto1.jpeg" alt="Banner 1" className="carousel-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-overlay">
            <img src="/img/foto2.jpg" alt="Banner 2" className="carousel-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-overlay">
            <img src="/img/foto3.jpg" alt="Banner 3" className="carousel-image" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carousel-overlay">
            <img src="/img/foto2.jpg" alt="Banner 3" className="carousel-image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
