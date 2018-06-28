import React, { Component } from 'react';

import './styles.css';
import iconReplay from '../../images/icon-replay.svg';

class MainContent extends Component {
  render() {
    return (
      <div className="main-content d-flex flex-column justify-content-center">
        <div className="text-content">
          <h1>Share, screenshot and print.</h1>
          <div className="subhead">
            Upverter Viewer makes it easy to share views of your design.
          </div>
          <div className="design-box">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Share Your Design</h3>
              <img src={iconReplay} alt="ico ico-replay"/>
            </div>
            <p>
              Share your design via URL or embedded code. 
              Your recipients won't need to install software or sign in to view it.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
