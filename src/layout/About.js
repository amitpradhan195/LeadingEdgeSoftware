import React from "react";
import Banner from "../assets/banner.png";
import Handshake from "../assets/handshake.png";

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
          <img src={Banner} alt="banner" className="img-fluid" />
          <div className="content">
            <h2>Who we are </h2>
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

          <div className="content">
            <h2>What we do</h2>
            <ul>
              <li>
                <i className="bi-check-all"></i>
                Avails the services of highly qualified, experienced
                professionals not commonly available at an affordable price for
                small businessess
              </li>
              <li>
                <i className="bi-check-all"></i>
                Run your business more time without having to think about all
                the numbers
              </li>
              <li>
                <i className="bi-check-all"></i>
                Save resources to run your business successfully
              </li>
            </ul>
          </div>
          <div className="opportunity row p-3">
            <p className="col-md-8">
              Given the opportunity to work for your promising company, we will
              prove, with our dedication and high performance, that you have
              purchased peace of mind in the guise of our professional services.
            </p>
            <img
              src={Handshake}
              alt="opportunity"
              className="col-md-4 img-fluid"
            />
          </div>

          <div className="content">
            <h2>Our Goals</h2>
            <ul>
              <li>
                <i className="bi-check-all"></i>
                Provide reliable, efficient, and experienced accounting support
                to your business.
              </li>
              <li>
                <i className="bi-check-all"></i>
                Ensure sound financial advice based on regular maintenance of
                your financial data.
              </li>
              <li>
                <i className="bi-check-all"></i>
                Contribute towards long term and sustainable success of your
                business by keeping an <br /> eye on the projections and
                performance with regular appraisals and financial reports.
              </li>
              <li>
                <i className="bi-check-all"></i>
                We are here to grow your business by tie-up with your
                organization.
              </li>
              <li>
                <i className="bi-check-all"></i>
                we are ready to lead you into the future of Technology.
              </li>
              <li>
                <i className="bi-check-all"></i>
                Process Efficiency across Your Organization.
              </li>
              <li>
                <i className="bi-check-all"></i>
                Accelerated growth.
              </li>
              <li>
                <i className="bi-check-all"></i>
                Dramatically Improved Visibility.
              </li>
              <li>
                <i className="bi-check-all"></i>
                Significant IT Time and Cost Savings.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
