import React from "react";
// import ReactDOM from 'react-dom' --Both works fine(It brings the entire react-dom package)
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Dog1",
      animal: "Dog",
      breed: "Normal",
    }),
    React.createElement(Pet, {
      name: "German shepard",
      animal: "Dog",
      breed: "German",
    }),
    React.createElement(Pet, {
      name: "Street Dog",
      animal: "Dog",
      breed: "Street",
    })
  );
};

render(React.createElement(App), document.getElementById("root"));
