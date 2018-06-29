import React, { Component } from 'react';
import logo from '../../images/logo.png';
import './styles.css';

class Header extends Component {
  render() {
    const { onShowModal } = this.props;
    return (
      <header className="d-flex align-items-center justify-content-between">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="buttons-container">
          <button onClick={onShowModal} className="login">Login</button>
          <button onClick={onShowModal} className="start-for-free">Start for Free</button>
        </div>
      </header>
    );
  }
}

export default Header;
