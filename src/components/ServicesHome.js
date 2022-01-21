import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";

import webDev from "../assets/services/webDev.png";
import webDesign from "../assets/services/webDesign.png";
import productmgmt from "../assets/services/product-management.png";
import marketing from "../assets/services/marketing.png";
import graphicDesign from "../assets/services/graphicDesign.png";
import dataMgmt from "../assets/services/dataMgmt.png";

export default function ServicesHome2() {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/service-detail', {replace: false}), [navigate]);
  return (
    <section id="services" className="services">
      <div className="container">
        <header className="section-header">
          <h2>Services</h2>
          <p>Our Services</p>
        </header>
        <div className="row service-list text-center">
          <div className="col-md-4">
            <div className="service-item" onClick={handleOnClick}>
              <img src={webDev} alt="serviceImg" className="img-fluid" />
              <h4>Web Development</h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item" onClick={handleOnClick}>
              <img src={webDesign} alt="serviceImg" className="img-fluid" />
              <h4>Web Design</h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item" onClick={handleOnClick}>
              <img src={productmgmt} alt="serviceImg" className="img-fluid" />
              <h4>Product Management</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item" onClick={handleOnClick}>
              <img src={marketing} alt="serviceImg" className="img-fluid" />
              <h4>Marketing</h4>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item" onClick={handleOnClick}>
              <img src={graphicDesign} alt="serviceImg" className="img-fluid" />
              <h4>Graphic Designing</h4>
              <p>
                Quis consequatur saepe eligendi voluptatem consequatur dolor
                consequuntur
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item" onClick={handleOnClick}>
              <img src={dataMgmt} alt="serviceImg" className="img-fluid" />
              <h4>Data Management</h4>
              <p>
                Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                sit aspernatur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
