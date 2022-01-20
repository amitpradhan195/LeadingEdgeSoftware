import React, { useEffect } from "react";
import heroImg from "../assets/hero-img.png";
import Aos from "aos/dist/aos";
import "aos/dist/aos.css";
// import WP from "../components/workingProcess";
import FlipAnimation from "../components/FlipAnimation";
import Services from "../components/ServicesHome2";
import Clients from "../components/Clients";
import CTA from "../components/CallToAction";

export default function Home() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                We offer modern solutions for growing your business
              </h1>
              <h2
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                data-aos-delay="400"
              >
                You think, we make IT easy
              </h2>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={heroImg} className="img-fluid" alt="hero img" />
            </div>
          </div>
        </div>
      </section>
      <FlipAnimation />
      {/* <WP /> */}
      <Services />
      <Clients />
      <CTA />
    </>
  );
}
