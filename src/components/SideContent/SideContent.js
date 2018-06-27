import React, { Component } from 'react';
import './styles.css';
import browser from '../../images/browser.png';

class SideContent extends Component {
  render() {
    return (
      <div className="side-content d-flex flex-column justify-content-center">
        <div className="image-container">
          <img src={browser} className="browser-img" alt="browser" />
        </div>
      </div>
    );
  }
}

export default SideContent;
