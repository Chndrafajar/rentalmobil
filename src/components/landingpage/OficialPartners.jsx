import React from 'react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { partners } from '../../assets/data';

export default function OficialPartners() {
  return (
    <section className="oficial">
      <div className="container">
        <div className="row">
          <h6>Oficial Partners</h6>
        </div>
        <div className="slider-logo">
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              568: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
              1200: {
                spaceBetween: 25,
                slidesPerView: 6,
              },
            }}
            className="mySwiper"
          >
            {partners.map((b) => (
              <SwiperSlide key={b.id}>
                <div className="card-logo-slider">
                  <img src={b.img} alt={b.id} className="img" />
                  <div className="overlay-bukti"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
