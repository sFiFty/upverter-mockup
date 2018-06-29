import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Section from './components/Section/Section.js'

class App extends Component {
  state = {
    isModalShown: false,
  }
  onShowModal = () => this.setState({ isModalShown: true })
  onHideModal = () => this.setState({ isModalShown: false })

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header onShowModal={this.onShowModal} />
        <Section isModalShown={this.state.isModalShown} onHideModal={this.onHideModal} />
      </div>
    );
  }
}

export default App;
