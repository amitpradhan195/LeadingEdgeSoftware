import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

import Client1 from "../assets/clients/client-1.png";
import Client2 from "../assets/clients/client-2.png";
import Client3 from "../assets/clients/client-3.png";
import Client4 from "../assets/clients/client-4.png";
import Client5 from "../assets/clients/client-5.png";
import Client6 from "../assets/clients/client-6.png";
import Client7 from "../assets/clients/client-7.png";
import Client8 from "../assets/clients/client-8.png";

SwiperCore.use([Autoplay, Pagination]);

export default function Clients() {
  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Our Clients</h2>
          <p>We have worked with</p>
        </header>

        <Swiper
          speed={400}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={true}
          slidesPerView={"auto"}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 120,
            },
          }}
        >
          <SwiperSlide>
            <img src={Client1} alt="clients" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Client2} alt="clients" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Client3} alt="clients" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Client4} alt="clients" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Client5} alt="clients" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Client6} alt="clients" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Client7} alt="clients" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Client8} alt="clients" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
