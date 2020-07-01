import React, { Component } from 'react';
import BirthTime from '../../components/bday/BirthTime.js';
import DeathTime from '../../components/bday/DeathTime.js';
import PresentContainer from './PresentContainer';

import moment from 'moment';
import { Link } from 'react-router-dom';
// import '../css/result.css';

export default class ResultsDisplay extends Component {

  calculateBirth = (bday) => {
    const bdayMoment = moment(bday, "MM/DD/YYYY");
    const daysAgo = bdayMoment.diff(moment(), 'days')
    console.log("days ago: " + daysAgo)

    const birthtime = moment().add(daysAgo, 'seconds').format('h:mm:ss a')
    return birthtime;
  }

  calculateDeath = (bday) => {
    const bdayMoment = moment(bday, "MM/DD/YYYY");
    const daysAgo = bdayMoment.diff(moment(), 'days')
    const remainingTime = 28800 + daysAgo;
    const diedtime = moment().add(remainingTime, 'seconds').format("h:mm:ss a")
    return diedtime;
  }

  calculatePercentage = (bday) => {
    const bdayMoment = moment(bday, "MM/DD/YYYY");
    const daysAgo = bdayMoment.diff(moment(), 'days')
    return -(daysAgo/28880) * 100

  }



  render() {
    const bday = this.props.match.params.month + "/" + this.props.match.params.day + "/" + this.props.match.params.year;

    return (
      <div className="results-display">
        <div className="results-display-background" />
        <div className="results-display-background-color" />

        <div className='times'>
          <BirthTime birthtime={this.calculateBirth(bday)} />
          <PresentContainer bday={bday} />
          <DeathTime diedtime={this.calculateDeath(bday)} />
        </div>

        <div className="meter">
          <span className="spanner" style={{width: `${this.calculatePercentage(bday)}%`}}></span>
        </div>

        <div className='footer'>
          <Link to={"/"}>Home</Link>
        </div>

      </div>
      )
}
}

