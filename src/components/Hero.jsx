import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Hero.css';

const Hero = () => {
  return (
    <section className="hero" data-aos="fade-up">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src="/img/foto1.jpg" alt="Banner 1" />
        </div>
        <div>
          <img src="/img/foto2.jpg" alt="Banner 2" />
        </div>
        <div>
          <img src="/img/foto3.jpg" alt="Banner 3" />
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
