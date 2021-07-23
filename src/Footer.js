import React from "react";
import "./Footer.css";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <i className="fas fa-envelope iconfooter"></i>
      <p>
        © Copyright {year} <a href="https://www.github.com/J-ustine">Justine</a>
      </p>
    </div>
  );
}
