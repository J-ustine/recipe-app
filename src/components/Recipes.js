import React, { useState } from "react";
import axios from "axios";
import "../style/Recipes.css";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Recipes(props) {
  const [id, setId] = useState();
  const [instructions, setInstructions] = useState([]);
  const [isShow, setIsShow] = useState(false);
  let urlDetail = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${props.apiKey}`;

  function addInstructions(response) {
    setInstructions([]);
    response.data[0].steps.map(function (steps, index) {
      return setInstructions((prevInstructions) => {
        if (steps.ingredients === []) {
          return [...prevInstructions, { step: steps.step }];
        } else {
          return [
            ...prevInstructions,
            {
              ingredients: steps.ingredients.map((ingredients, index) => {
                return { name: ingredients.name };
              }),
              step: steps.step,
            },
          ];
        }
      });
    });
  }

  return (
    <InfiniteScroll
      dataLength={props.page}
      next={() => props.addResult()}
      hasMore={true}
    >
      {
        <div>
          <div className="row">
            {props.recipe.map((recipe, index) => {
              return (
                <div className="bg-white text-dark col-3" key={index}>
                  <img
                    src={recipe.image}
                    className="card-img"
                    alt="..."
                    name={recipe.id}
                    onMouseOver={(event) => setId(event.target.name)}
                    onClick={() =>
                      axios.get(urlDetail).then((response) => {
                        setIsShow(!isShow);
                        addInstructions(response);
                      })
                    }
                  />
                  <div className="card-img">
                    <h5 className="card-title">{recipe.title}</h5>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="instruction">
            {instructions.map((instructions, index) => {
              return (
                <div
                  className={isShow ? "recipe-detail" : "hidden recipe-detail"}
                  key={index}
                >
                  <div className="ingredients">
                    Ingrédients :{" "}
                    {instructions.ingredients.map((ingredients, index) => {
                      return (
                        <span className="" key={index}>
                          {ingredients.name}{" "}
                        </span>
                      );
                    })}
                  </div>
                  <em className="step">{instructions.step}</em>
                  <hr
                    style={{
                      width: "100px",
                      display: "block",
                      margin: "0 auto",
                      marginTop: "10px",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      }
    </InfiniteScroll>
  );
}
