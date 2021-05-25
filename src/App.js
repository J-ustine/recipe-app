import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./Search";
import Recipes from "./Recipes.js";

function App() {
  const [ingredients, setIngredients] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [diet, setDiet] = useState("");
  const [id, setId] = useState("");
  const apiKey = `1303de381eab40eb93ebeace5ea53832`;
  let url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}${diet}&number=20&apiKey=${apiKey}`;
  let urlRecipeDetail = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`;

  function checked(event) {
    setIsChecked(!isChecked);
    console.log(event.target.value);
    if (event.target.value === "Vegetarian" && !isChecked) {
      setDiet("&diet=vegetarian");
    } else {
      if (event.target.value === "Gluten Free" && !isChecked) {
        setDiet("&diet=nogluten");
      } else {
        if (event.target.value === "Ketogenic" && !isChecked) {
          setDiet("&diet=ketogenic");
        } else {
          if (event.target.value === "Vegan" && !isChecked) {
            setDiet("&diet=vegan");
          } else {
            setDiet("");
          }
        }
      }
    }
  }

  function handleChange(event) {
    setIngredients(event.target.value);
  }
  function searchRecipe(event) {
    event.preventDefault();
    setRecipe([]);
    axios.get(url).then(urlResponse);
  }

  function detailsId(event) {
    setId(event.target.value);
  }
  function details() {
    axios.get(urlRecipeDetail).then(console.log(urlRecipeDetail));
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
    setIsVisible(true);
  }

  return (
    <div className="App">
      <div className="container">
        <header>Recipees</header>
        <Search
          handleChange={handleChange}
          searchRecipe={searchRecipe}
          ingredients={ingredients}
          checked={checked}
        />
        <Recipes
          recipe={recipe}
          details={details}
          detailsId={detailsId}
          diet={diet}
          ingredients={ingredients}
          isVisible={isVisible}
        />
      </div>
    </div>
  );
}

export default App;
