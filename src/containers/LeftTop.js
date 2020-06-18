import React, {Component} from 'react';
import PortraitContainer from './pictures/PortraitContainer.js';
import'../css/left-top.css';

class LeftTop extends Component {
  render() {
    return (
      <div className='left-top'>
        <PortraitContainer />
      </div>
    )
  }
}

export default LeftTop;
