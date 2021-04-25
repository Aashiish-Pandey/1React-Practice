import "./App.css";
import React, { Component } from "react";
import Person from "./Person/Person";
import Button from "./Person/Button";


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

  onClickHandler = ()=> {

    this.setState({

      persons: [
        { name: "akhilesh", age: 25, height: 6 },
        { name: "dabbu", age: 24, height: 5.8 },
        { name: "pandit", age: 20, height: 5.7 },
      ],
    })
  }

  onChangeHandler = (e)=>{

    this.setState({

      persons: [
        { name: e.target.value, age: 25, height: 6 },
        { name: "dabbu", age: 24, height: 5.8 },
        { name: "pandit", age: 20, height: 5.7 },
      ],
    })
  }

  

  render() {
    const style = {
      padding:"10px",
      color:'red',
      margin:'10px',
      borderRadius: "5px"

    }
   
    return (
      <div className="App">
         
        <h1>Hello React Js....</h1>
        <button style ={style} onClick ={this.onClickHandler}>Change Names</button>

        {this.state.persons.map((person) => {
          return (
            <Person
              key={person.age}
              name={person.name}
              age={person.age}
              height={person.height}
              change={this.onChangeHandler}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
