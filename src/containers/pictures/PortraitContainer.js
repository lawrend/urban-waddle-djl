import React, {Component} from 'react';
import portrait from '../../portrait.jpeg';
import BioBox from '../../components/BioBox.js';

class PortraitContainer extends Component {
  render() {
    return (
      <div className='portrait-container'>
        <img className = 'portrait' src={portrait} alt="a doofus"/>
      </div>
    )
  }
}

export default PortraitContainer;


