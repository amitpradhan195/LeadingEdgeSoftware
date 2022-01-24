import React from "react";
import { useNavigate } from "react-router-dom";
import serviceData from "../data/service-data";

export default function ServicesHome() {
  const navigate = useNavigate();
  const handleOnClick = (id) => {
    navigate(`/service-detail/${id}`, { replace: false });
  };
  return (
    <section id="services" className="services">
      <div className="container">
        <header className="section-header">
          <h2>Services</h2>
          <p>Our Services</p>
        </header>
        <div className="row service-list text-center">
          {serviceData.map((value, index) => {
            return (
              <div className="service-item col-md-4" onClick={()=>handleOnClick(value.id)} key={index}>
                <img src={value.imgsrc} alt="serviceImg" className="img-fluid" />
                <h4>{value.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
