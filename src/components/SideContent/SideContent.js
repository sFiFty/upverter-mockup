import React, { Component } from 'react';
import './styles.css';
import browser from '../../images/browser.png';
import iconClose from '../../images/button-close.svg';
import iconMan from '../../images/icon-man.svg';
import iconEye from '../../images/icon-eye.svg';
import iconFb from '../../images/icon-fb.svg';
import iconTw from '../../images/icon-tw.svg';
import iconGithub from '../../images/icon-github.svg';

class SideContent extends Component {
  state = {
    isPasswordShown: false,
  }
  showPassword = () => this.setState({ isPasswordShown: true });
  hidePassword = () => this.setState({ isPasswordShown: false });
  render() {
    const { isModalShown, onHideModal } = this.props;
    const { isPasswordShown } = this.state;
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
                  <input type={isPasswordShown ? 'text': 'password'} placeholder="Password" name="password" id="password"/>
                  <img onClick={ isPasswordShown ? this.hidePassword : this.showPassword} src={iconEye} className="icon-eye" alt="show password" />
                </div>
                <button className="orange">Login</button>
              </div>
              <div className="remind-me">
                Forgot your username or password? <span>Remind Me</span>
              </div>
              <div className="or">
                Or
              </div>
              <div className="social d-flex justify-content-center">
                <div className="social-ico-container ico-fb-container">
                  <img src={iconFb} className="ico ico-fb" alt="facebook" />
                </div>
                <div className="social-ico-container ico-tw-container">
                  <img src={iconTw} className="ico ico-tw" alt="twitter" />
                </div>
                <div className="social-ico-container ico-github-container">
                  <img src={iconGithub} className="ico ico-github" alt="github" />
                </div>
              </div>
            </div>
          </div>
        }
        {
          isModalShown &&
          <div className="sign-up d-flex flex-column justify-content-center align-items-center">Sign Up for Free to Start Uploading</div>
        }
      </div>
    );
  }
}

export default SideContent;
