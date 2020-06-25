import React, {Component} from 'react';
import IntroBox from '../components/IntroBox'
import ProjectBox from '../components/ProjectBox'
import '../css/right-bottom.css';

class RightBottom extends Component {
  render() {
    return (

        <div className='right-bottom'>
        <div className='right-bottom-upper'>
          <IntroBox />
        </div>
        <div className='right-bottom-lower'>
          <ProjectBox />
        </div >
      </div>
      )
  }
}

export default RightBottom;
