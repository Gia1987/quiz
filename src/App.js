import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: ['Whats the color of the Sky?', 'How many day in a year?'],
      count: 0
    };
  }

  countHandler = ()=>{
    this.setState({
      count  : this.state.count += 1
    })
  }
  questions = () => {
    return this.state.quiz[this.state.count]
  }
  render() {
    return (
      <div className="App">
        <p>{this.questions()}</p>
        <form onClick= {this.countHandler()}>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default App;
