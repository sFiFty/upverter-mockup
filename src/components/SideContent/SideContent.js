import React, { Component } from 'react';
import firebase from '../../firebase';
import './styles.css';
import browser from '../../images/browser.png';
import Login from './Login';

class SideContent extends Component {
  /**
   * Authorization
   */
  onSignIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      /**
       * If success - close modal
       */
      this.props.onHideModal();
    }).catch(error => {
      /**
       * Show error by simple alert
       */
      alert(error.message);
    })
  }

  render() {
    const { onHideModal, isModalShown } = this.props;
    let sideClasses = 'side-content d-flex flex-column';
    if (isModalShown) sideClasses += ' login';
    return (
      <div className={sideClasses}>
        {
          !isModalShown && 
          <div className="image-container">
            <img src={browser} className="browser-img" alt="browser" />
          </div>
        }
        {
          isModalShown && 
          <Login onHideModal={onHideModal} onSignIn={this.onSignIn} />
        }
        {
          isModalShown &&
          <footer className="sign-up d-flex flex-column justify-content-center align-items-center">Sign Up for Free to Start Uploading</footer>
        }
      </div>
    );
  }
}

export default SideContent;
