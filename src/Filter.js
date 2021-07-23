import React from "react";
import "./Filter.css";

export default function Filter(props) {
  const regime = ["Vegetarian", "Vegan", "Gluten Free", "Ketogenic"];

  return (
    <form>
      <div className="search-form">
        <div>
          {regime.map(function (regime, index) {
            return (
              <span className="form" key={index}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  value={regime}
                  onChange={props.checked}
                />
                <label htmlFor="">{regime}</label>
              </span>
            );
          })}
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            value="Ready in 20min"
            onChange={props.checked}
          />
          <label htmlFor="">Ready in 20min</label>
        </div>
      </div>
    </form>
  );
}
