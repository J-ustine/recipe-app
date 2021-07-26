import React from "react";
import "./Recipes.css";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Recipes(props) {
  return (
    <InfiniteScroll
      dataLength={props.addResult}
      next={() => props.addPage()}
      hasMore={true}
    >
      {
        <div className="row">
          {props.recipe.map((recipe, index) => {
            return (
              <div className="bg-white text-dark col-3" key={index}>
                <img src={recipe.image} className="card-img" alt="..." />
                <div className="card-img">
                  <h5 className="card-title">{recipe.title}</h5>
                </div>
              </div>
            );
          })}
        </div>
      }
    </InfiniteScroll>
  );
}
