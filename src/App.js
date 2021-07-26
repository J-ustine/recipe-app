import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./NavBar";
import Recipes from "./Recipes";
import Footer from "./Footer";

export default function App() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [numberResult, setNumberResult] = useState(20);
  const season = "tomato";
  const apiKey = `1303de381eab40eb93ebeace5ea53832`;
  let url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}&number=${numberResult}&apiKey=${apiKey}`;
  let urlRandom = `https://api.spoonacular.com/recipes/random?number=${numberResult}&apiKey=${apiKey}`;
  let urlSeason = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${season}&number=${numberResult}&apiKey=${apiKey}`;

  function searchRecipe(event) {
    event.preventDefault();
    setRecipe([]);
    axios.get(url).then(urlResponse);
  }

  function randomRecipe(event) {
    event.preventDefault();
    setRecipe([]);
    axios.get(urlRandom).then(randomUrlResponse);
  }

  function seasonRecipe(event) {
    event.preventDefault();
    setRecipe([]);
    axios.get(urlSeason).then(seasonUrlResponse);
  }

  function urlResponse(response) {
    response.data.results.map(function (results, index) {
      return setRecipe((prevRecipe) => {
        return [
          ...prevRecipe,
          {
            id: results.id,
            title: results.title,
            image: results.image,
          },
        ];
      });
    });
  }

  function randomUrlResponse(response) {
    response.data.recipes.map(function (results, index) {
      return setRecipe((prevRecipe) => {
        return [
          ...prevRecipe,
          {
            id: results.id,
            title: results.title,
            image: results.image,
          },
        ];
      });
    });
  }

  function seasonUrlResponse(response) {
    response.data.map(function (results, index) {
      return setRecipe((prevRecipe) => {
        return [
          ...prevRecipe,
          {
            id: results.id,
            title: results.title,
            image: results.image,
          },
        ];
      });
    });
  }

  function addResult() {
    setNumberResult(numberResult + 10);
    axios.get(url).then(urlResponse);
  }

  return (
    <div className="App">
      <div className="container">
        <NavBar
          handleChange={(event) => setIngredients(event.target.value)}
          searchRecipe={searchRecipe}
          ingredients={ingredients}
          randomRecipe={randomRecipe}
          seasonRecipe={seasonRecipe}
        />
        <Recipes
          recipe={recipe}
          ingredients={ingredients}
          addResult={addResult}
          page={numberResult}
        />
      </div>
      <Footer />
    </div>
  );
}
