import React from "react";
import "../css/ServiceHome2.css";

import webDev from "../assets/webDev.png";
import webDesign from "../assets/webDesign.png";
import productmgmt from "../assets/product-management.png";
import marketing from "../assets/marketing.png";
import graphicDesign from "../assets/graphicDesign.png";
import dataMgmt from "../assets/dataMgmt.png";

export default function ServicesHome2() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div>
          <h2>Services</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row service-list text-center">
          <div className="col-md-4">
            <div className="service-item">
              <img src={webDev} alt="serviceImg" className="img-fluid" />
              <h4>Web Development</h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={webDesign} alt="serviceImg" className="img-fluid" />
              <h4>Web Design</h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={productmgmt} alt="serviceImg" className="img-fluid" />
              <h4>Product Management</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={marketing} alt="serviceImg" className="img-fluid" />
              <h4>Marketing</h4>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={graphicDesign} alt="serviceImg" className="img-fluid" />
              <h4>Graphic Designing</h4>
              <p>
                Quis consequatur saepe eligendi voluptatem consequatur dolor
                consequuntur
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
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
