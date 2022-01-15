import React, { useEffect } from "react";
import Team from "../components/Team";
import Aos from "aos/dist/aos";

export default function About() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>About Us</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>AboutUs</li>
            </ol>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>Who we are </h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas. Magnam
              dolores commodi suscipit. Necessitatibus eius consequatur ex
              aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
              quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
              fugiat sit in iste officiis commodi quidem hic quas. Magnam
              dolores commodi suscipit. Necessitatibus eius consequatur ex
              aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
              quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
              fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row content section-title">
            <h2>What we do</h2>
            <div className="col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi-check-all"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat
                </li>
                <li>
                  <i className="bi-check-all"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit
                </li>
                <li>
                  <i className="bi-check-all"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Team />
    </>
  );
}
