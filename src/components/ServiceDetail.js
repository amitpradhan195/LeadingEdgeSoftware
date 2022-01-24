import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import serviceData from '../data/service-data';

export default function ServiceDetail() {
  let { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    serviceData.filter((details) => details.id + "" === id).map((detail) => {
      setDetails(detail);
      return detail;
    });
  }, [id]);

  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Services</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>Service Details</li>
            </ol>
          </div>
        </div>
      </section>
      <div className="container my-5">
        <div className="row">
          <div className="offset-lg-1 col-lg-4">
            <img
              alt="serviceImg"
              className="img-fluid rounded shadow float-left"
              width="100%"
              src={details.imgsrc}
            />
          </div>

          <div className="divMoreinfo offset-lg-1 col-lg-6 text-justify">
            <h1>{details.title}</h1>
            <p>{details.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
