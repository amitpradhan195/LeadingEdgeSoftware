import React from "react";
import serviceImg from '../assets/about.jpg'

export default function ServiceDetail() {
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Services</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>Service Details</li>
            </ol>
          </div>
        </div>
      </section>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              alt="serviceImg"
              className="img-fluid rounded shadow float-left"
              width="100%"
              src={serviceImg}
            />
          </div>

          <div className="divMoreinfo col-lg-6 text-justify">
            <h1>Service Title</h1>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
        </div>
      </div>
    </>
  );
}
