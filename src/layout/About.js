import React from "react";
import Banner from '../assets/banner.png'

export default function About() {
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>About Us</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>AboutUs</li>
            </ol>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container">
          <img src={Banner} alt="banner" className="img-fluid"/>
          <div className="section-title">
            <h2>Who are we </h2>
            <p>
              Leading Edge Software is a certified software development and web
              development Company in Nepal. We are providing our services to
              small as well as big corporate houses including individual
              entrepreneurs using our unmatched expertise and cutting edge
              technology. We empower millions of customers around the world to
              start and grow their businesses with our smart marketing
              technology, award-winning support, and inspiring content.
            </p>
          </div>

          <div className="row content section-title">
            <h2>What we do</h2>
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi-check-all"></i> have availed the services of
                  highly qualified, experienced professionals not commonly
                  available at an affordable price for small businesses;
                </li>
                <li>
                  <i className="bi-check-all"></i> More time to run your
                  business without having to think about all the numbers; and
                </li>
                <li>
                  <i className="bi-check-all"></i> saved resources to run your
                  business successfully.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Given the opportunity to work for your promising company, we
                will prove, with our dedication and high performance, that you
                have purchased peace of mind in the guise of our professional
                services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
