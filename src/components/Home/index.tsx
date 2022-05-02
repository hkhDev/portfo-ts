import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function Home() {
  return (
    <div className="home-body">
      <div className="home-container">
        <h2>Harris's portfolio</h2>
        <img
          className="home-logo-1"
          src="images/html_css_js_logo.png"
          alt="html-css-js-logo"
        />
        <h3>HTML, CSS and Javascript</h3>
        <Link to="/marvel">
          <div className="btn btn-dark home-link">
            <span>Marvel Museum</span>
          </div>
          <br />
        </Link>
        <img
          className="home-logo-2"
          src="images/react_logo.png"
          alt="react-logo"
        />
        <h3>React Application</h3>
        <Link to="/MyMemo">
          <div className="btn btn-dark home-link">
            <span>My Memo</span>
          </div>
        </Link>
        <br />
        <Link to="/todolist">
          <div className="btn btn-dark home-link">
            <span>To-Do-List</span>
          </div>
        </Link>
        <br />
        {/* <img className="home-logo-3" src="images/ejs_logo.png" alt="ejs-logo" />
        <img
          className="home-logo-3"
          src="images/logo_V8g1keS.svg"
          alt="mongoDB-logo"
        />
        <h3>EJS and MongoDB application</h3>
        <a
          className="btn btn-dark home-link"
          href="https://kahoblog.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span>Blog</span>
        </a> */}
      </div>
    </div>
  );
}

export default Home;
