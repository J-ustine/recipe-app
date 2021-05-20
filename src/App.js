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
  const apiKey = `1303de381eab40eb93ebeace5ea53832`;
  let url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}${diet}&number=20&apiKey=${apiKey}`;

  console.log(isChecked);

  function checked(event) {
    setIsChecked(!isChecked.value);
    if (event.target.value === "Vegetarian") {
      setDiet("&diet=vegetarian");
    } else {
      if (event.target.value === "Gluten free") {
        setDiet("&diet=glutenfree");
      } else {
        setDiet("&diet=vegan");
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
    setIngredients("");
  }

  function urlResponse(response) {
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
        <header>Recipees</header>
        <Search
          handleChange={handleChange}
          searchRecipe={searchRecipe}
          ingredients={ingredients}
          checked={checked}
        />
        <Recipes recipe={recipe} isVisible={isVisible} />
      </div>
    </div>
  );
}

export default App;
