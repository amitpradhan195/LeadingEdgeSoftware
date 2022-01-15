import React from "react";
import ServicesHome from "../components/ServicesHome";

export default function Services() {
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
              <li>Services</li>
            </ol>
          </div>
        </div>
      </section>
      <ServicesHome />
    </>
  );
}
