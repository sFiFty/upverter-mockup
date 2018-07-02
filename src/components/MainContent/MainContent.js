import React, { Component } from 'react';

import './styles.css';
import iconReplay from '../../images/icon-replay.svg';
import iconPlus from '../../images/icon-plus.svg';
import iconScroll from '../../images/button-scroll.svg';

class MainContent extends Component {
  render() {
    const { isModalShown } = this.props;
    const mainClasses = isModalShown ? 'text-content modal-shown' : 'text-content';
    return (
      <div className="main-content d-flex flex-column justify-content-center">
        {
          isModalShown &&
          <div className="overlay" />
        }
        <div className={mainClasses}>
          {
            isModalShown &&
            <h2>
              Introduce Upverter Viewer
            </h2>
          }
          <h1>
            {
              isModalShown ? 
              'Easily view and share designs in your browser.' :
              'Share, screenshot and print.'
            }
          </h1>
          <div className="subhead">
            {
              isModalShown ? 
              'Upverter Viewer supports most Schematic and Layout formats including Altium, OrCAD, PADS, Eagle, KiCAD and even Gerber files.' :
              'Upverter Viewer makes it easy to share views of your design.'
            }
          </div>
          {
            !isModalShown &&
            <div className="design-container">
              <div className="design-box">
                <div className="d-flex justify-content-between align-items-baseline">
                  <h3>Share Your Design</h3>
                  <img src={iconReplay} className="ico ico-replay" alt="icon replay"/>
                </div>
                <p>
                  Share your design via URL or embedded code. 
                  Your recipients won't need to install software or sign in to view it.
                </p>
                <div className="line"><div className="active-line"></div></div>
              </div>
              <div className="design-box">
                <div className="d-flex justify-content-between align-items-baseline">
                  <h3>All Design Formats</h3>
                  <img src={iconPlus} className="ico ico-plus" alt="icon plus"/>
                </div>
                <div className="line"></div>
              </div>
              <div className="design-box">
                <div className="d-flex justify-content-between align-items-baseline">
                  <h3>Get Feedback Faster</h3>
                  <img src={iconPlus} className="ico ico-plus" alt="icon plus"/>
                </div>
                <div className="line"></div>
              </div>
            </div>
          }
          {
            isModalShown && 
              <img src={iconScroll} className="ico ico-scroll" alt="icon scroll"/>
          }
        </div>
      </div>
    );
  }
}

export default MainContent;
