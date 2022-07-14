import React from "react";
// import ReactDOM from 'react-dom' --Both works fine(It brings the entire react-dom package)
import { render } from "react-dom";

const pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(pet, {
      name: "Dog1",
      animal: "Dog",
      breed: "Normal",
    }),
    React.createElement(pet, {
      name: "German shepard",
      animal: "Dog",
      breed: "German",
    }),
    React.createElement(pet, {
      name: "Street Dog",
      animal: "Dog",
      breed: "Street",
    })
  );
};

render(React.createElement(App), document.getElementById("root"));
