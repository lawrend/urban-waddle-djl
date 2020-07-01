import React from 'react';
import moment from 'moment';

export default props => (
  <div className='today-time'>NOW<hr /><span className="time-readout"> {moment().format("hh:mm:ss a")}</span></div>
)

