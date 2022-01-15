import React from "react";

export default function Contact() {
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Contact Us</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>ContactUs</li>
            </ol>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>
                      A108 Street Name,
                      <br />
                      Birtamode, Jhapa
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>
                      +977-023 540000
                      <br />
                      +977-9800000000
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      info@leadingedge.com
                      <br />
                      contact@leadingedge.com
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-clock"></i>
                    <h3>Open Hours</h3>
                    <p>
                      Monday - Friday
                      <br />
                      9:00AM - 05:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form action="#" method="post" className="email-form">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>

            <div>
              <iframe
                className="mb-4"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433.0734685064503!2d87.99546226628405!3d26.645032434170645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5bb643a419ea7%3A0xfa3fd757a7e26409!2sLeading%20Edge%20Software!5e0!3m2!1sen!2snp!4v1642149552409!5m2!1sen!2snp"
                title="myLocation"
                frameBorder="0"
                style={{ border: "0", width: "100%", height: "384px" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
