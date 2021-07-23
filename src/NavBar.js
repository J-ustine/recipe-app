import React from "react";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <div className="navbar navbar-expand-lg navbar-white bg-white">
      <div className="container-fluid">
        <div className="navbar-brand" href="#">
          R
        </div>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/">
              The most loved
            </a>
            <form className="d-flex" onSubmit={props.searchRecipe}>
              <input
                className="form-control form-control-md search bg-light"
                type="search"
                placeholder="Enter an ingredient"
                aria-label="Search"
                onChange={props.handleChange}
                value={props.ingredients}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
