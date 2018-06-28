import React, { Component } from 'react';
import logo from '../../images/logo.png';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <header className="d-flex align-items-center justify-content-between">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="buttons-container">
          <button className="button">Login</button>
          <button className="button">Start for Free</button>
        </div>
      </header>
    );
  }
}

export default Header;
