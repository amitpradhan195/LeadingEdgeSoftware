import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";

import Portfolio1 from "../assets/portfolio/portfolio-1.jpg";

export default function Product() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/product-detail', {replace: false}), [navigate]);
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
              <li>Products</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="product" className="product">
        <div className="container">
          <div className="section-title">
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row product-container">
            <div className="col-lg-4 col-md-6 product-item" onClick={handleOnClick}>
              <img src={Portfolio1} className="img-fluid" alt="" />
              <div className="product-info">
                <h4>App 1</h4>
                <a href="/product-detail" className="more-details">
                  More Details
                </a>
                <a href="#" className="visit-link" title="Visit Site" target="_blank">
                  <i className="bi bi-link"></i>
                  Visit site
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 product-item" onClick={handleOnClick}>
              <img src={Portfolio1} className="img-fluid" alt="" />
              <div className="product-info">
                <h4>Web 2</h4>
                <a href="/product-detail" className="more-details">
                  More details
                </a>
                <a href="#" className="visit-link" title="Visit Site" target="_blank">
                  <i className="bi bi-link"></i>
                  Visit site
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 product-item" onClick={handleOnClick}>
              <img src={Portfolio1} className="img-fluid" alt="" />
              <div className="product-info">
                <h4>Web 2</h4>
                <a href="/product-detail" className="more-details">
                  More details
                </a>
                <a href="#" className="visit-link" title="Visit Site" target="_blank">
                  <i className="bi bi-link"></i>
                  Visit site
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 product-item" onClick={handleOnClick}>
              <img src={Portfolio1} className="img-fluid" alt="" />
              <div className="product-info">
                <h4>Web 2</h4>
                <a href="/product-detail" className="more-details">
                  More details
                </a>
                <a href="#" className="visit-link" title="Visit Site" target="_blank">
                  <i className="bi bi-link"></i>
                  Visit site
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 product-item" onClick={handleOnClick}>
              <img src={Portfolio1} className="img-fluid" alt="" />
              <div className="product-info">
                <h4>Web 2</h4>
                <a href="/product-detail" className="more-details">
                  More details
                </a>
                <a href="#" className="visit-link" title="Visit Site" target="_blank">
                  <i className="bi bi-link"></i>
                  Visit site
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 product-item" onClick={handleOnClick}>
              <img src={Portfolio1} className="img-fluid" alt="" />
              <div className="product-info">
                <h4>Web 2</h4>
                <a href="/product-detail" className="more-details">
                  More details
                </a>
                <a href="#" className="visit-link" title="Visit Site" target="_blank">
                  <i className="bi bi-link"></i>
                  Visit site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
