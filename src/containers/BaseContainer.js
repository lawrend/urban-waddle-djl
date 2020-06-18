import React, { Component } from 'react';
import RightBottom from './RightBottom.js';
import LeftTop from './LeftTop.js';
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
