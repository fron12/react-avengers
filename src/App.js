import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: [{name: 'Thor'}, {name: 'SpiderMan'}, {name: 'Iron-Man'}, 
      {name: 'Dr. Strange'}, {name: 'Hulk'}, {name: 'Captain-America'}, 
      {name: 'Black-Widow'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: by Fred Sohn</h1>
        </header>
        {this.state.avengers.map(avenger => <div key={avenger.name}>{avenger.name}</div>)}
      </div>
    );
  }
}

export default App;
