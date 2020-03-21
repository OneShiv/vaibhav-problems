import React from "react";
import "./styles.css";
import Person from "./Person";

class App extends React.Component {
  state = {
    persons: [
      {
        name: "Vaibhav",
        age: 26
      },
      {
        name: "Khushi",
        age: 13,
        desc: "My Goal is being Doctor"
      },
      {
        name: "V3",
        age: 29,
        desc: "My Goal is being Developer"
      }
    ],
    showPersons: false
  };
  personDeleteHandler = index => {
    const persons = this.state.persons.slice(); //gives a copy
    persons.splice(index, 1);
    this.setState({ persons: persons });
    console.log(this.state.persons);
  };
  render() {
    return (
      <div>
        {this.state.persons.map((person, index) => {
          return (
            <Person
              key={index + person.name}
              click={() => this.personDeleteHandler(index)}
              name={person.name}
              age={person.age}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
