import React from "react";
import "./pizza.css";

// functional Component
// Capital letter naming convention

let Pizza = (props) => {
  console.log("I am coming from App.js", props);

  //condition ? true : false
  // conditional rendering

  let pizzaPlacesList = props.pizzaPlaces.length ? (
    props.pizzaPlaces.map((pizzaPlace) => {
      console.log(pizzaPlace);
      return (
        // JSX --> Javascript xml
        <div className="pizza" key={pizzaPlace.id}>
          <h1>{pizzaPlace.name.toUpperCase()}</h1>
          <p>{pizzaPlace.description}</p>
          <button
            onClick={() => {
              props.deleteCard(pizzaPlace.id);
            }}
          >
            Delete Card
          </button>
        </div>
      );
    })
  ) : (
    <p>No data available</p>
  );

  console.log(pizzaPlacesList);

  return <div>{pizzaPlacesList}</div>;
  // return(

  //     <div className="pizza">
  //         <h1>{props.brand.toUpperCase()}</h1>
  //         <p>{props.description}</p>
  //     </div>
  // )
};

export default Pizza;
