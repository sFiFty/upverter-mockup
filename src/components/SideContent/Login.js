import React, { Component } from 'react';

import './styles.css';
import iconClose from '../../images/button-close.svg';
import iconMan from '../../images/icon-man.svg';
import iconEye from '../../images/icon-eye.svg';
import iconFb from '../../images/icon-fb.svg';
import iconTw from '../../images/icon-tw.svg';
import iconGithub from '../../images/icon-github.svg';

class Login extends Component {
  state = {
    isPasswordShown: false,
    email: null,
    password: null,
  }

  onSetUserName = event => this.setState({ email: event.target.value });
  onSetPasword = event => this.setState({ password: event.target.value });
  showPassword = () => this.setState({ isPasswordShown: true });
  hidePassword = () => this.setState({ isPasswordShown: false });
  onSignIn = () => {
    const { email, password } = this.state;
    this.props.onSignIn(email, password);
  }

  render() {
    const { onHideModal } = this.props;
    const { isPasswordShown } = this.state;
    return (
      <div className="login-container d-flex flex-column justify-content-center align-items-center">
        <img onClick={onHideModal} src={iconClose} className="ico ico-close" alt="icon close"/>
        <div className="login-content d-flex flex-column justify-content-center align-items-center">
          <img src={iconMan} className="icon-man" alt="login" />
          <div className="login-text">
            Please Login or Sign Up to Start Uploading
          </div>
          <div className="actions-container">
            <input onChange={this.onSetUserName} type="text" placeholder="Username" name="username" id="username"/>
            <div className="input-password-container">
              <input onChange={this.onSetPasword} type={isPasswordShown ? 'text': 'password'} placeholder="Password" name="password" id="password"/>
              <img onClick={ isPasswordShown ? this.hidePassword : this.showPassword} src={iconEye} className="icon-eye" alt="show password" />
            </div>
            <button onClick={this.onSignIn} className="active">Login</button>
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
    );
  }
}

export default Login;
