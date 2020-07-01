import React, {Component} from 'react';
import Code from '../../components/homepage/Code.js';
import {Link} from 'react-router-dom';

export default class CodeContainer extends Component {
  render() {
    return (
      <div className="code-container">

      <Link to='/wakeup'>
        <Code />

    </Link>
      </div>
      );
  }
}
