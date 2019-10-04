import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () =>
   (
    <div id="main-div">
      <h1>Adopt Me!</h1>
      <Pet name="Finn" animal="Dog" breed="Pit-Mix" />
      <Pet name="Rolex" animal="Dog" breed="Golden" />
      <Pet name="Bruno" animal="Dog" breed="St. Bernard" />
    </div>
  )

render(<App/>, document.getElementById("root"));
