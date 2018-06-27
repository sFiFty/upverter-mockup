import React, { Component } from 'react';
import logo from '../../images/logo.png';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <header className="d-flex align-items-center justify-content-between">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

export default Header;
