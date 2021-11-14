import React from "react";
import "../style/NavBar.css";

export default function NavBar(props) {
  return (
    <div className="navbar navbar-expand-lg navbar-white">
      <div className="container-fluid">
        <div className="navbar-brand" href="#" onClick={props.test}>
          R
        </div>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav nav-fill w-100">
            <a
              className={
                props.active[0] ? "nav-link p-3 active" : "nav-link p-3"
              }
              aria-current="page"
              href="/"
              onClick={props.randomRecipe}
              id="home"
            >
              Home
            </a>
            <a
              className={
                props.active[1] ? "nav-link p-3 active" : "nav-link p-3"
              }
              href="/"
              onClick={props.seasonRecipe}
              id="season"
            >
              Seasonal Recipes
            </a>
            <form className="d-flex input-group" onSubmit={props.searchRecipe}>
              <input
                className="form-control search bg-light"
                type="search"
                placeholder="Enter an ingredient"
                aria-label="Search"
                onChange={props.handleChange}
                value={props.ingredients}
              />
              <button type="submit" hidden></button>
              <div className="background-separator bg-light">
                <input type="text" name="" className="separator" id="" />
              </div>
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filters
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
