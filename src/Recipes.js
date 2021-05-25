import React from "react";

export default function Recipes(props) {
  let words = props.diet.split("=");
  if (props.isVisible) {
    return (
      <div className="row">
        <h1>
          Take a look to these {words[1]} recipes with {props.ingredients}
        </h1>
        {props.recipe.map((recipe, index) => {
          return (
            <div className="card col-2" key={index}>
              <img src={recipe.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <button
                  onClick={props.details}
                  onMouseEnter={props.detailsId}
                  value={recipe.id}
                  className="btn btn-outline-secondary"
                >
                  Check the recipe details
                </button>
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
