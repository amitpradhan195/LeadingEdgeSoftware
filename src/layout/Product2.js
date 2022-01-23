import React from "react";
import { useNavigate } from "react-router-dom";

import ProductData from "../data/product-data";

export default function Product() {
  const navigate = useNavigate();
  const handleOnClick = (id) => { 
    navigate(`/product-detail/${id}`, { replace: false })
  } 

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
            {ProductData.map((value, index) => {
              return (
                <div
                  className="col-lg-4 col-md-6 product-item"
                  onClick={()=>handleOnClick(value.id)}
                  key={index}
                >
                  <img
                    src={value.imgsrc}
                    className="img-fluid"
                    alt="Product"
                  />
                  <div className="product-info">
                    <h4>{value.title}</h4>
                    <a href="/product-detail" className="more-details">
                      More Details
                    </a>
                    <a
                      href={value.url}
                      className="visit-link"
                      title="Visit Site"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-link"></i>
                      Visit site
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
