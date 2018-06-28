import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Section from './components/Section/Section.js'

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <Section />
      </div>
    );
  }
}

export default App;
