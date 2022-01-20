import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";

import webDev from "../assets/webDev.png";
import webDesign from "../assets/webDesign.png";
import productmgmt from "../assets/product-management.png";
import marketing from "../assets/marketing.png";
import graphicDesign from "../assets/graphicDesign.png";
import dataMgmt from "../assets/dataMgmt.png";

export default function Services() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/service-detail', {replace: false}), [navigate]);

  return (
    <section id="services" className="services">
      <div className="container">
        <div>
          <h2>
            <strong>Services</strong>
          </h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row service-list">
          <div className="col-md-4 service-item">
            <div className="icon-box" onClick={handleOnClick}>
              <div className="icon">
                <img src={webDev} alt="Web Development" className="img-fluid" />
              </div>
              <h4>
                <a href="/service-detail">Web Development</a>
              </h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>

          <div className="col-md-4 service-item">
            <div className="icon-box" onClick={handleOnClick}>
              <div className="icon">
                <img src={webDesign} alt="Web Design" className="img-fluid" />
              </div>
              <h4>
                <a href="/service-detail">Web Design</a>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </div>

          <div className="col-md-4 service-item">
            <div className="icon-box" onClick={handleOnClick}>
              <div className="icon">
                <img src={productmgmt} alt="Product Management" className="img-fluid" />
              </div>
              <h4>
                <a href="/service-detail">Product Management</a>
              </h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>

          <div className="col-md-4 mt-4 service-item">
            <div className="icon-box" onClick={handleOnClick}>
              <div className="icon">
                <img src={marketing} alt="Marketing" className="img-fluid" />
              </div>
              <h4>
                <a href="/service-detail">Marketing</a>
              </h4>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>

          <div className="col-md-4 mt-4 service-item">
            <div className="icon-box" onClick={handleOnClick}>
              <div className="icon">
                <img src={graphicDesign} alt="Graphic Design" className="img-fluid" />
              </div>
              <h4>
                <a href="/service-detail">Graphic Design</a>
              </h4>
              <p>
                Quis consequatur saepe eligendi voluptatem consequatur dolor
                consequuntur
              </p>
            </div>
          </div>

          <div className="col-md-4 mt-4 service-item">
            <div className="icon-box" onClick={handleOnClick}>
              <div className="icon">
                <img src={dataMgmt} alt="Data Management" className="img-fluid" />
              </div>
              <h4>
                <a href="/service-detail">Data Management</a>
              </h4>
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
