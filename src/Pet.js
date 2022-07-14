import React from "react";

const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.animal}</h1>
      <h1>{props.breed}</h1>
    </div>
  );
};

export default Pet;

//Jsx makes code more readble form
//Both works fine

// import React from 'react'

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.animal),
//       React.createElement("h3", {}, props.breed),
//     ]);
//   };

//   export default Pet
