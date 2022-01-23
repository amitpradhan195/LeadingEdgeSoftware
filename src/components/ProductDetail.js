import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Khata from "../assets/products/khata.jpg";
// import Portfolio2 from "../assets/products/smart-cafe.jpg";
// import Portfolio3 from "../assets/products/portfolio-3.jpg";

SwiperCore.use([Autoplay, Pagination]);

export default function ProductDetail1() {
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Products</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>Product Details</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="row">
          <div className="offset-lg-1 col-lg-5 text-center">
            <Swiper
              speed={400}
              // loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={true}
              slidesPerView={"auto"}
              pagination={{ clickable: true, dynamicBullets: true }}
            >
              <SwiperSlide>
                <img src={Khata} alt="product" className="img-fluid" />
              </SwiperSlide>
              {/* <SwiperSlide>
                <img src={Portfolio2} alt="product" className="img-fluid" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Portfolio3} alt="product" className="img-fluid" />
              </SwiperSlide> */}
            </Swiper>
          </div>
          <div className="col-lg-6 product-details">
            <div className="product-info">
              <h3>Project information</h3>
              <ul>
                {/* <li>
                  <strong>Category</strong>: Web design
                </li>
                <li>
                  <strong>Client</strong>: ASU Company
                </li>
                <li>
                  <strong>Project date</strong>: 01 March, 2020
                </li> */}
                <li>
                  <strong>Project URL</strong>: <a href="#">www.example.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="offset-lg-1 product-description p-3 mt-4">
          <h2>About Khata</h2>
          <p>
            Whether your business is new or old, it needs efficient accounting
            services for growth and sustainability. Having your books in top
            shape all year round is an achievement that can help your business
            function smoothly and provide grounds for sound and promising
            business decisions. Accounting software benefits include increased
            accuracy by reducing or eliminating human errors in calculation.
            Manual bookkeeping processes involve making a lot of mathematical
            calculations by hand. An incorrect calculation early on in the in
            the process could have a great impact on the end balance As your
            accounting needs will continue to grow with your business, it is
            imperative to pay careful thought to a long term and viable solution
            for this vital part of your business. By hiring Leading Edge
            Software to take care of all your accounting needs, you will be
            ensuring yourself a step in the right direction. By letting we be
            your professional accountants you will:
             – have availed the services
            of highly qualified, experienced professionals not commonly
            available at an affordable price for small businesses; – More time
            to run your business without having to think about all the numbers;
            and – saved resources to run your business successfully. Given the
            opportunity to work for your promising company, we will prove, with
            our dedication and high performance, that you have purchased peace
            of mind in the guise of our professional accounting services.
          </p>
        </div>
      </section>

      {/* <section id="portfolio-details" className="portfolio-details my-5">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img src={Portfolio1} alt="" />
                  </div>

                  <div className="swiper-slide">
                    <img src={Portfolio2} alt="" />
                  </div>

                  <div className="swiper-slide">
                    <img src={Portfolio3} alt="" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Web design
                  </li>
                  <li>
                    <strong>Client</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="#">www.example.com</a>
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum
                  deserunt eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
