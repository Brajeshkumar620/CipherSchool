import React, { Component } from "react";
//Alias
import Pizza from "./components/Pizza";

// function App() {
//   return (
//     <div className="App">
//       <h1>My first react app</h1>
//     </div>
//   );
// }

//Class based Component
class App extends Component{
  render(){
    let dynamicName = "React is mind blowing";
    let brand = "PizzaHut"
    let description = "Best Pizza in town";

    let brand2 = "Domino's"
    let description2 = "Best Pizza in town";

    return(
      <div>
        <h1>{dynamicName}</h1>
        <Pizza brand={brand} description={description} />
        <Pizza brand={brand2} description={description2} />
      </div>
    );
  }
}
export default App;
