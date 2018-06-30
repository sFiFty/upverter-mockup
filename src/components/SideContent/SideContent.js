import React, { Component } from 'react';
import './styles.css';
import browser from '../../images/browser.png';
import iconClose from '../../images/button-close.svg';
import iconMan from '../../images/icon-man.svg';
import iconEye from '../../images/icon-eye.svg';

class SideContent extends Component {
  render() {
    //const { isModalShown } = this.props;
    const { onHideModal } = this.props;
    const isModalShown = true;
    let sideClasses = 'side-content d-flex flex-column justify-content-center';
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
          <div className="login-container d-flex flex-column justify-content-center align-items-center">
            <img onClick={onHideModal} src={iconClose} className="ico ico-close" alt="icon close"/>
            <div className="login-content d-flex flex-column justify-content-center align-items-center">
              <img src={iconMan} className="icon-man" alt="login" />
              <div className="login-text">
                Please Login or Sign Up to Start Uploading
              </div>
              <div className="actions-container">
                <input type="text" placeholder="Username" name="username" id="username"/>
                <div className="input-password-container">
                  <input type="password" placeholder="Password" name="password" id="password"/>
                  <img src={iconEye} className="icon-eye" alt="show password" />
                </div>
                
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default SideContent;
