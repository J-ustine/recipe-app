import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./Search";
import Recipes from "./Recipes.js";

function App() {
  const [ingredients, setIngredients] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const apiKey = `1303de381eab40eb93ebeace5ea53832`;
  const url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}&number=10&apiKey=${apiKey}`;

  function handleChange(event) {
    setIngredients(event.target.value);
  }
  function searchRecipe(event) {
    event.preventDefault();
    axios.get(url).then(urlResponse);
  }

  function urlResponse(response) {
    console.log(response);
    response.data.results.map(function (results, index) {
      return setRecipe((prevRecipe) => {
        return [
          ...prevRecipe,
          {
            title: results.title,
            image: results.image,
          },
        ];
      });
    });
    setIsVisible(true);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Welcome to Recipees</h1>
        <h2>Let's find the perfect recipe for you!</h2>
        <Search handleChange={handleChange} searchRecipe={searchRecipe} />
        <Recipes recipe={recipe} isVisible={isVisible} />
      </div>
    </div>
  );
}

export default App;
