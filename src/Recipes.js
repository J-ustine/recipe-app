import React from "react";

export default function Recipes(props) {
  if (props.isVisible) {
    return (
      <div className="row">
        {props.recipe.map((recipe, index) => {
          return (
            <div className="card col-2" key={index}>
              <img src={recipe.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <a href="#" className="btn btn-outline-secondary">
                  Check the recipe details
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
