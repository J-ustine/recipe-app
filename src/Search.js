import React from "react";

export default function Search(props) {
  const regime = ["Vegetarian", "Vegan", "Gluten Free", "Lacteos free"];

  return (
    <form onSubmit={props.searchRecipe}>
      <div>
        {regime.map(function (regime, index) {
          return (
            <span className="form" key={index}>
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label htmlFor="">{regime}</label>
            </span>
          );
        })}
      </div>
      <input
        type="text"
        placeholder="Enter an ingredient"
        onChange={props.handleChange}
        value={props.ingredients}
      />
      <input type="submit" />
    </form>
  );
}
