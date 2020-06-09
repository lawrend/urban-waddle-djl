import React, { Component } from 'react';
import RightBottom from './RightBottom.js';
import LeftTop from './LeftTop.js';

class BaseContainer extends Component {
  render() {
    return (
      <div className='base-container'>
        <LeftTop />
        <RightBottom />
      </div>
    )
  }
}

export default BaseContainer;
