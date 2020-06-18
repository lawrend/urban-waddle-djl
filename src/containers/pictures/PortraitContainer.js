import React, {Component} from 'react';
import portrait from '../../portrait.jpeg';

class PortraitContainer extends Component {
  render() {
    return (
      <div className='portrait-container'>
        <img className = 'portrait' src={portrait} />
      </div>
    )
  }
}

export default PortraitContainer;


