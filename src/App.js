import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => (
  <div id="main-div">
    <h1>Adopt Me!</h1>
    <React.StrictMode>
      <SearchParams />
    </React.StrictMode>
  </div>
);

render(<App />, document.getElementById("root"));
