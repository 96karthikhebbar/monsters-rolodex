import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }


  // dynamically allocating values to monster
  // componentDidMount exucutes the block of code inside it,whenever the component get's mounted.
  // fetch gets the data from the mentioned api or url 
  // here fetch gets data in a form of promise, so we by using ".then" statement store the "response" part of data in response.json
  // we also store the "user" part of data in monsters state dynamically by using ".then" statement.
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {

    // using the De-structuring concept of javascript,setting the state values of monster and searchField to a constant
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
      <input type='search' placeholder='search monster' 
      onChange={e =>this.setState({searchField:e.target.value})}
      />

      {/* calling cardList component and
       passing the state of monsters as prop to it*/}
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
