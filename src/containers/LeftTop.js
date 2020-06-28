import React, {Component} from 'react';
import PortraitContainer from './pictures/PortraitContainer.js';
import BioBox from '../components/BioBox.js';
import CodeContainer from './CodeContainer.js';
import'../css/left-top.css';

class LeftTop extends Component {
  render() {
    return (
      <div className='left-top'>
        <PortraitContainer />
        <CodeContainer />
        <BioBox />
      </div>
    )
  }
}

export default LeftTop;
