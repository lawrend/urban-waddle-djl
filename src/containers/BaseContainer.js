import React, { Component } from 'react';
import RightBottom from './homepage/RightBottom.js';
import LeftTop from './homepage/LeftTop.js';
import '../css/base.css';

class BaseContainer extends Component {
  render() {
    return (
      <div className='flex-div base-container'>
        <LeftTop />
        <RightBottom />
      </div>
    )
  }
}

export default BaseContainer;
