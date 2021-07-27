import React, { useState } from "react";
import axios from "axios";
import "./Recipes.css";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Recipes(props) {
  const [id, setId] = useState();
  const [instructions, setInstructions] = useState([]);
  let urlDetail = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${props.apiKey}`;

  function addInstructions(response) {
    console.log(response.data[0].steps[0]);
    response.data[0].steps.map(function (steps, index) {
      return setInstructions((prevInstructions) => {
        if (steps.ingredients === []) {
          return [...prevInstructions, { step: steps.step }];
        } else {
          return [
            ...prevInstructions,
            {
              ingredients: steps.ingredients.map((ingredients, index) => {
                return { name: ingredients.name, image: ingredients.image };
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
                    axios
                      .get(urlDetail)
                      .then((response) => addInstructions(response))
                  }
                />
                <div className="card-img">
                  <h5
                    className="card-title"
                    onClick={() => console.log(instructions)}
                  >
                    {recipe.title}
                  </h5>
                </div>
                {instructions.map((instructions, index) => {
                  return <div className="collapse"></div>;
                })}
              </div>
            );
          })}
        </div>
      }
    </InfiniteScroll>
  );
}
