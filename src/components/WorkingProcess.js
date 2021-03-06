import React from "react";
import Discovery from "../assets/working-process/discovery1.gif";
import Planning from "../assets/working-process/planning.gif";
import Execute from "../assets/working-process/execute.gif";
import Deliver from "../assets/working-process/deliver.gif";

export default function FlipAnimation() {
  return (
    <section className="flip-animation">
      <header className="section-header">
        <h2>Process</h2>
        <p>Our working process</p>
      </header>
      <div className="flip row">
        <div className="flip-box col-md-3">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src={Discovery} alt="Discovery" className="img-fluid" />
              <h3>Discovery</h3>
            </div>
            <div className="flip-box-back">
              <h2>Discovery</h2>
              <p>What an amazing discover.</p>
            </div>
          </div>
        </div>
        <div className="flip-box col-md-3">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src={Planning} alt="Planning" className="img-fluid" />
              <h3>Planning</h3>
            </div>
            <div className="flip-box-back">
              <h2>Planning</h2>
              <p>What an amazing planning.</p>
            </div>
          </div>
        </div>
        <div className="flip-box col-md-3">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src={Execute} alt="Execute" className="img-fluid" />
              <h3>Execute</h3>
            </div>
            <div className="flip-box-back">
              <h2>Execute</h2>
              <p>What an amazing execution.</p>
            </div>
          </div>
        </div>
        <div className="flip-box col-md-3">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src={Deliver} alt="Deliver" className="img-fluid" />
              <h3>Deliver</h3>
            </div>
            <div className="flip-box-back">
              <h2>Deliver</h2>
              <p>What an amazing deliver.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
