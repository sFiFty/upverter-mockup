import React, { Component } from 'react';
import logo from '../../images/logo.png';
import firebase from '../../firebase';
import './styles.css';

class Header extends Component {
  state = {
    userEmail: null,
  }
  componentDidMount() {
    /**
     * Detecting if user was signed up
     */
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ userEmail: user.email });
      } else {
        this.setState({ userEmail: null });
      }
    });
  }
  onSignOut = () => {
    firebase.auth().signOut();
  }
  render() {
    const { onShowModal } = this.props;
    const { userEmail } = this.state;
    return (
      <header className="d-flex align-items-center justify-content-between">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="buttons-container">
          {
            userEmail ? 
            <div className="user-container">
              <span>{userEmail}</span>
              <button onClick={this.onSignOut} className="default">Sign out</button>
            </div> :
            <div>
              <button onClick={onShowModal} className="default">Login</button>
              <button onClick={onShowModal} className="active">Start for Free</button>
            </div>
          }
        </div>
      </header>
    );
  }
}

export default Header;
