import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AvengersList from './components/AvengersList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: [
        {id: 1, name: 'Thor', location: 'Danger Zone'}, 
        {id: 2, name: 'SpiderMan', location: 'Danger Zone'}, 
        {id: 3, name: 'Iron-Man', location: 'Danger Zone'}, 
      {id: 4, name: 'Dr. Strange', location: 'Danger Zone'}, 
      {id: 5, name: 'Hulk', location: 'Danger Zone'}, 
      {id: 6, name: 'Captain-America', location: 'Danger Zone'}, 
      {id: 7, name: 'Black-Widow', location: 'Danger Zone'}
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
        <AvengersList avengers={this.state.avengers} />
      </div>
    );
  }
}

export default App;
