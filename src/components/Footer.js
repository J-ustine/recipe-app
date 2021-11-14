import React from "react";
import "../style/Footer.css";
import Image1 from "../style/favicon.png";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <section className="woColor" id="footer">
      <div className="row">
        <div className="col-3 red">
          <i className="fab fa-github footer"></i>
          <a
            href="https://github.com/J-ustine"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <i className="fab fa-linkedin-in footer"></i>
          <a
            href="https://www.linkedin.com/in/collachejustine/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <i className="far fa-envelope footer"></i>
          <a
            href="mailto:justine.collache@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Mail
          </a>
        </div>
        <div className="col-5"></div>
        <div className="col-3 brand">
          <img src={Image1} alt="" />
          <small>
            <a
              href="https://github.com/J-ustine"
              className="github"
              target="_blank"
              rel="noreferrer"
            >
              Justine Collache
            </a>
            <i className="far fa-copyright"></i>
            {year}
          </small>
        </div>
      </div>
    </section>
  );
}
