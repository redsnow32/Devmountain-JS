import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    //all react apps have to have render
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the React Webinar Application</h1>
        </header>
        <p className="App-intro">
          This is the coolest framework ever.
        </p>
      </div>
    );
  }
}

export default App;

//class App and Export App have to match in order to get it to work correctly.
