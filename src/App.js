import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";

const App = () => (
  <div id="main-div">
    <header>
      <Link to="/">Adopt Me!</Link>
    </header>
    <React.StrictMode>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </React.StrictMode>
  </div>
);

render(<App />, document.getElementById("root"));
