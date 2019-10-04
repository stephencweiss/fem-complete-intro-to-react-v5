import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () =>
  React.createElement(
    "div",
    { id: "main-div" },

    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Finn",
        animal: "Dog",
        breed: "Pit-Mix"
      }),
      React.createElement(Pet, {
        name: "Rolex",
        animal: "Dog",
        breed: "Golden"
      }),
      React.createElement(Pet, {
        name: "Bruno",
        animal: "Dog",
        breed: "St. Bernard"
      })
    ]
  );

render(React.createElement(App), document.getElementById("root"));
