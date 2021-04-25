import "./App.css";
import React, { Component } from "react";
import Person from "./Person/Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: "ashish", age: 25, height: 6 },
        { name: "Prince", age: 24, height: 5.8 },
        { name: "shivam", age: 20, height: 5.7 },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React Js....</h1>

        {this.state.persons.map((person) => {
          return (
            <Person
              key={person.age}
              name={person.name}
              age={person.age}
              height={person.height}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
