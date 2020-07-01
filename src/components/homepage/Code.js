import React, {Component} from 'react';

export default class Code extends Component {
  render() {
    return (
      <div className="code-text">
        <code>10 PRINT "YOU"</code>
        <br/>
        <code>20 PRINT "HAVE"</code>
        <br/>
        <code>30 PRINT "TODAY"</code>
        <br/>
        <code>40 GOTO 10</code>
        <br/>
        <code>50 END</code>
      </div>
    );
  }
}
