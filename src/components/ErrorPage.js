import React from "react";
import ErrorPic from "../assets/errorPage.png"

export default function ErrorPage() {
  return (
    <div className="row error container align-items-center">
      <div className="col-md-6 error-text text-center">
        <h1>404</h1>
        <h3>This page could not be found</h3>
      </div>
      <div className="col-md-6">
        <img src={ErrorPic} className="img-fluid" alt="error Pic" />
      </div>
    </div>
  );
}
