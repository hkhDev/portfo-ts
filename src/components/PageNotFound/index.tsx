import React from "react";
import { useLocation } from "react-router-dom";
import "./index.scss";

function PageNotFound() {
  let location = useLocation();
  return (
    <div className="pageNotFound">
      <h1 className="pageNotFound-content">Opps!</h1>
      <h2 className="pageNotFound-content">
        Sorry the page {location.pathname} doesn't exist.
      </h2>
    </div>
  );
}

export default PageNotFound;
