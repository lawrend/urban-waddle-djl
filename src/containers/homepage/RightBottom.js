import React, {Component} from 'react';
import IntroBox from '../../components/homepage/IntroBox'
import ProjectBox from '../../components/homepage/ProjectBox'
import {Link} from 'react-router-dom';
import '../../css/right-bottom.css';

class RightBottom extends Component {
  render() {
    return (

      <div className='right-bottom'>
        <div className='right-bottom-upper'>
          <IntroBox />
        </div>
        <div className='right-bottom-lower'>

          <Link to="/checker">
            <ProjectBox />

          </Link>
        </div >
      </div>
      )
  }
}

export default RightBottom;
