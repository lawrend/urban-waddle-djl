import React, {Component} from 'react';
import RightBottom from './homepage/RightBottom.js';
import LeftTop from './homepage/LeftTop.js';
import Footer from './homepage/Footer.js';
import '../css/base.css';

class BaseContainer extends Component {
  render() {
    return (
      <div className='flex-div base-container'>
        <LeftTop />
        <RightBottom />
        <Footer />
      </div>
    )
  }
}

export default BaseContainer;
