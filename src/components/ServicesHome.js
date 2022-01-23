import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import webDev from "../assets/services/webDev.png";
import MobileAppDev from "../assets/services/mobile-app-dev.png";
import SEO from "../assets/services/seo.png";
import DesktopAppDev from "../assets/services/desktop-app-dev.png";
import WebHosting from "../assets/services/web-hosting.png";
import BulkSMS from "../assets/services/bulk-sms.png";

export default function ServicesHome2() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/service-detail", { replace: false }),
    [navigate]
  );
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
                {/* Web development is the work involved in developing a website for
                the Internet or an intranet. Web development can range from
                developing a simple single static page of plain text to complex
                web applications, electronic businesses, and social network
                services. */}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item" onClick={handleOnClick}>
              <img src={MobileAppDev} alt="serviceImg" className="img-fluid" />
              <h4>Mobile App Development</h4>
              <p>
                {/* Web design encompasses many different skills and disciplines in
                the production and maintenance of websites. The different areas
                of web design include web graphic design; user interface design;
                authoring, including standardised code and proprietary software;
                user experience design; and search engine optimization. */}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item" onClick={handleOnClick}>
              <img src={SEO} alt="serviceImg" className="img-fluid" />
              <h4>SEO</h4>
              <p>
                {/* Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia */}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item" onClick={handleOnClick}>
              <img src={DesktopAppDev} alt="serviceImg" className="img-fluid" />
              <h4>Desktop App Development</h4>
              <p>
                {/* At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis */}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item" onClick={handleOnClick}>
              <img src={WebHosting} alt="serviceImg" className="img-fluid" />
              <h4>Web Hosting</h4>
              <p>
                {/* Quis consequatur saepe eligendi voluptatem consequatur dolor
                consequuntur */}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item" onClick={handleOnClick}>
              <img src={BulkSMS} alt="serviceImg" className="img-fluid" />
              <h4>Bulk SMS</h4>
              <p>
                {/* Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                sit aspernatur */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
