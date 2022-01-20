import React from "react";
import Discovery from "../assets/discover.gif";
import Planning from "../assets/planning1.gif";
import Execute from "../assets/execute.gif";
import Deliver from "../assets/deliver.gif";

export default function workingProcess() {
  return (
    <section id="working-process" className="working-process">
      <div className="container" data-aos="fade-up" data-aos-once={true}>
        <header className="section-header">
          <h2>Process</h2>
          <p>Our working process</p>
        </header>

        <div className="row wp-list">
          <div
            className="col-md-3 wp-item text-center"
            data-aos="flip-left"
            data-aos-once={true}
            data-aos-delay="100"
          >
            <img src={Discovery} alt="wp-pic" className="img-fluid" />
            <h3>Discovery</h3>
          </div>
          <div
            className="col-md-3 wp-item text-center"
            data-aos="flip-left"
            data-aos-once={true}
            data-aos-delay="400"
          >
            <img src={Planning} alt="wp-pic" className="img-fluid" />

            <h3>Planning</h3>
          </div>
          <div
            className="col-md-3 wp-item text-center"
            data-aos="flip-left"
            data-aos-once={true}
            data-aos-delay="700"
          >
            <img src={Execute} alt="wp-pic" className="img-fluid" />

            <h3>Execute</h3>
          </div>
          <div
            className="col-md-3 wp-item text-center"
            data-aos="flip-left"
            data-aos-once={true}
            data-aos-delay="1000"
          >
            <img src={Deliver} alt="wp-pic" className="img-fluid" />

            <h3>Deliver</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
