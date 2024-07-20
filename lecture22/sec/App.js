import React, { Component } from "react";
import Pizza from "./components/Pizza";
import "./App.css";
import AddPizza from "./components/AddPizza";

// function App() {
//   return (
//     <div className="App">
//       <h1> My first React App</h1>
//     </div>
//   );
// }

//Class based components
class App extends Component {
  state = {
    // pizzaPlaces:[]
    dynamicName: "Pizza Hunter",
    // brand:"Pizza",
    // description:"bestpizza in town"
    pizzaPlaces: [
      { name: "Pizza Hut", description: "Best Pizza", id: 1 },
      { name: "Dominos", description: "Best pizza in town", id: 2 },
      { name: "Papa John", description: "Pizza places", id: 3 },
      { name: "Friends Pizza", description: "Law gate", id: 4 },
    ],
  };

  addCard = (details) => {
    console.log(details);
    // console.log(6 + Math.random()*10);
    details.id = Math.floor(6 + Math.random() * 10); //this.state.pizzaPlaces.length+1
  };

  deleteCard = (id) => {
    console.log(id);
    let pizzaPlaces = this.pizzaPlaces.filter((pizzaPlace) => {
      return pizzaPlace.id !== id;
    });
    this.setState({
      pizzaPlaces: pizzaPlaces,
    });
  };

  render() {
    // let dynamicName = 'React is mindblowing'
    // let brand = "pizzahut"
    // let description = "Best pizza in town"
    // let brand2 = "Dominos"
    // let description2 = "Best pizza in city"
    return (
      <div>
        <h1>{this.state.dynamicName}</h1>
        {/* <Pizza brand={this.state.pizzaPlaces[0].name} description={this.state.pizzaPlaces[0].description}></Pizza> */}

        {/* <Pizza brand={this.state.pizzaPlaces[3].name} description={this.state.pizzaPlaces[3].description}></Pizza> */}

        <Pizza
          pizzaPlaces={this.state.pizzaPlaces}
          deleteCard={this.deleteCard}
        ></Pizza>
        {/* <Pizza></Pizza> */}
        <AddPizza addCard={this.addCard()}></AddPizza>

        {/* <Pizza brand={this.state.brand} description={this.state.description}></Pizza> */}
      </div>
    );
  }
}

export default App;
