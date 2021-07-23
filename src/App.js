import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./NavBar";
import Filter from "./Filter";
import Recipes from "./Recipes";
import Footer from "./Footer";

function App() {
  const [ingredients, setIngredients] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [diet, setDiet] = useState("");
  const [ready20min, setReady20min] = useState("");
  const [id, setId] = useState("");
  const apiKey = `1303de381eab40eb93ebeace5ea53832`;
  let url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}${diet}${ready20min}&number=20&apiKey=${apiKey}`;
  let urlRecipeDetail = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`;

  function checked(event) {
    setIsChecked(!isChecked);
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
            if (event.target.value === "Ready in 20min" && !isChecked) {
              setReady20min("&maxReadyTime=20");
            } else {
              setDiet("");
              setReady20min("");
            }
          }
        }
      }
    }
  }

  function searchRecipe(event) {
    event.preventDefault();
    setRecipe([]);
    axios.get(url).then(urlResponse);
  }

  function recipeDetail() {
    return (
      <div className="collapse" id="collapseExample">
        <div className="card card-body">hello</div>
      </div>
    );
  }

  function details() {
    axios.get(urlRecipeDetail).then(recipeDetail);
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
        <NavBar
          handleChange={(event) => setIngredients(event.target.value)}
          searchRecipe={searchRecipe}
          ingredients={ingredients}
          checked={checked}
        />
        <Filter
          handleChange={(event) => setIngredients(event.target.value)}
          searchRecipe={searchRecipe}
          ingredients={ingredients}
          checked={checked}
        />
        <Recipes
          recipe={recipe}
          details={details}
          detailsId={(event) => setId(event.target.value)}
          diet={diet}
          ingredients={ingredients}
          isVisible={isVisible}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
