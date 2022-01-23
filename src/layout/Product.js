import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Khata from "../assets/products/khata.jpg";
import smartCafe from "../assets/products/smart-cafe.jpg";
import yatayat from "../assets/products/yatayat.jpg";

export default function Product() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/product-detail", { replace: false }),
    [navigate]
  );
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
          <div className="row product-container">
            <div
              className="col-lg-4 col-md-6 product-item"
              onClick={handleOnClick}
            >
              <img src={Khata} className="img-fluid" alt="portfolio" />
              <div className="product-info">
                <h4>App 1</h4>
                <a href="/product-detail" className="more-details">
                  More Details
                </a>
                <a
                  href="#"
                  className="visit-link"
                  title="Visit Site"
                  target="_blank"
                >
                  <i className="bi bi-link"></i>
                  Visit site
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 product-item"
              onClick={handleOnClick}
            >
              <img src={smartCafe} className="img-fluid" alt="portfolio" />
              <div className="product-info">
                <h4>Web 2</h4>
                <a href="/product-detail" className="more-details">
                  More details
                </a>
                <a
                  href="#"
                  className="visit-link"
                  title="Visit Site"
                  target="_blank"
                >
                  <i className="bi bi-link"></i>
                  Visit site
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 product-item"
              onClick={handleOnClick}
            >
              <img src={yatayat} className="img-fluid" alt="portfolio" />
              <div className="product-info">
                <h4>Web 2</h4>
                <a href="/product-detail" className="more-details">
                  More details
                </a>
                <a
                  href="#"
                  className="visit-link"
                  title="Visit Site"
                  target="_blank"
                >
                  <i className="bi bi-link"></i>
                  Visit site
                </a>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6 product-item" onClick={handleOnClick}>
              <img src={Portfolio1} className="img-fluid" alt="portfolio" />
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
              <img src={Portfolio1} className="img-fluid" alt="portfolio" />
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
              <img src={Portfolio1} className="img-fluid" alt="portfolio" />
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
