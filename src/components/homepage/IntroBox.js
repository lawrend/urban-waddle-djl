import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <div className='intro-text'>
    <code>
    <h2>Get a load of meeeeeeeeee</h2>
    <p>I went to <a href="https://www.berkeleylaw.edu">law school</a></p>
    <p>but didn't like <a href="https://www.quora.com/What-are-some-of-the-worst-aspects-of-being-a-lawyer?no_redirect=1" target="_blank">being a lawyer</a></p>
      <p>I teach <a href="https://www.testmasters.net" target="_blank">LSAT classes</a></p>
      <p> and I <a href="https://www.github.com/lawrend" target="_blank">code</a></p>
    <p>my wife asked me to make her<Link to="/checker"> this</Link></p>
    <p>I try to make <a href="https://www.wikipedia.org/wiki/zen" target="_blank">Love bigger than Fear</a></p>
    <p><a href="https://en.wikipedia.org/wiki/Mac_Miller" target="_blank">This guy</a> was <a href="https://www.npr.org/2018/08/06/635054748/mac-miller-tiny-desk-concert" target="_blank">awesome</a></p>
  </code>

  </div>
)
// <a href="https://twitter.com/MacMiller/status/1026203475007307776" target="_blank">
