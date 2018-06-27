import React, { Component } from 'react';

import MainContent from '../MainContent/MainContent.js';
import SideContent from '../SideContent/SideContent.js';
import './styles.css';

class Section extends Component {
  render() {
    return (
      <section className="d-flex">
        <MainContent />
        <SideContent />
      </section>
    );
  }
}

export default Section;
