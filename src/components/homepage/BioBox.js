import React, {Component} from 'react';

class BioBox extends Component {
  render() {
    return (
      <div className='bio-text'>

        <div className='bio-text-title'>
          &#9775;
        </div>
        <div className='icon-container'>

          <a href="https://www.github.com/lawrend" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/douglas-lawrence" target="_blank" rel="noopener noreferrer">
            <i className='fa fa-linkedin'></i>
          </a>

        </div>
      </div>
      )
  }
}

export default BioBox;
