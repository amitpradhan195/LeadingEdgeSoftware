import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import ProductData from "../data/product-data";

SwiperCore.use([Autoplay, Pagination]);

export default function ProductDetail1() {
  let { id } = useParams();
  const [details, setDetails] = useState({});
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    ProductData.filter((details) => details.id + "" === id).map((detail) => {
      setDetails(detail);
      setFeatures(detail.features);
      return detail;
    });
  }, [id]);

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
          <div className="offset-lg-1 col-lg-5">
            <Swiper
              speed={400}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              slidesPerView={"auto"}
              pagination={{ clickable: true, dynamicBullets: true }}
            >
              <SwiperSlide>
                <img src={details.imgsrc} alt="product" className="img-fluid" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-lg-5 offset-lg-1 product-details">
            <div className="product-info">
              <h3>Project information</h3>
              <h4 className="text-decoration-underline">Features:</h4>
              <ul>
                {features.map((value, index) => {
                  return (
                    <li key={index}>
                      <h6>
                        <i className="bi bi-caret-right-fill"></i> {value}
                      </h6>
                    </li>
                  );
                })}
              </ul>
              <strong>Project URL</strong>:{" "}
              <a href={details.url}>{details.url}</a>
            </div>
          </div>
        </div>
        <div className="offset-lg-1 product-description p-3 mt-4">
          <h2>About {details.title}</h2>
          <p>
            {details.description}
            {/* Whether your business is new or old, it needs efficient accounting
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
            your professional accountants you will: – have availed the services
            of highly qualified, experienced professionals not commonly
            available at an affordable price for small businesses; – More time
            to run your business without having to think about all the numbers;
            and – saved resources to run your business successfully. Given the
            opportunity to work for your promising company, we will prove, with
            our dedication and high performance, that you have purchased peace
            of mind in the guise of our professional accounting services. */}
          </p>
        </div>
      </section>
    </>
  );
}
