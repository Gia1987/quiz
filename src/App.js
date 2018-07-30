import React, { Component } from 'react';
import './App.css';

class App extends Component {


  questions = () => {
    let quiz = ['Whats the color of the Sky?', 'How many day in a year?'];
    return quiz[0]
  }
  render() {
    return (
      <div className="App">
        <p> {this.questions()}</p>
      </div>
    );
  }
}

export default App;
