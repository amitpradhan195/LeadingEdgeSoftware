import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "swiper/swiper-bundle.min.css";
import "./css/style.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./layout/Home";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Services from "./layout/Services";
import ServiceDetail from "./components/ServiceDetail";
import ProductDetail from "./components/ProductDetail";
import ErrorPage from "./components/ErrorPage";
import Product from "./layout/Product";

export default function App() {
  const [isActive, setActive] = useState(false);

  const activeButton = () => {
    if (window.scrollY > 200) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  window.addEventListener("scroll", activeButton);
  return (
    <Router className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/service-detail/:id" element={<ServiceDetail />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="*" exact={true} element={<ErrorPage />} />
      </Routes>
      <Footer />
      <button
        className={`back-to-top d-flex align-items-center justify-content-center ${
          isActive ? "active" : ""
        }`}
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </Router>
  );
}
