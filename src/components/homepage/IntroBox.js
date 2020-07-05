import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <div className='intro-text'>
    <code>
    <h1>Get a load of meeeee</h1>
    <p>I went to <a href="https://www.law.berkeley.edu" target="_blank" rel="noopener noreferrer">law school</a></p>
    <p>but didn't like <a href="https://www.quora.com/What-are-some-of-the-worst-aspects-of-being-a-lawyer?no_redirect=1" target="_blank" rel="noopener noreferrer">being a lawyer</a></p>
      <p>I teach <a href="https://www.testmasters.net" target="_blank" rel="noopener noreferrer">LSAT classes</a></p>
      <p> and I <a href="https://www.github.com/lawrend" target="_blank" rel="noopener noreferrer">code</a></p>
    <p>my wife asked me to make her<Link to="/checker"> this</Link></p>
    <p>Music--it's a <a href="https://www.npr.org/2018/08/06/635054748/mac-miller-tiny-desk-concert" target="_blank" rel="noopener noreferrer">beautiful thing</a></p>
  </code>

  </div>
)
// <a href="https://twitter.com/MacMiller/status/1026203475007307776" target="_blank">
