// holds bday input
import React, { Component } from 'react';
import BdayInput from '../../components/bday/BdayInput.js'
import '../../css/bday.css';

class EightHoursContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bday: '',
    }
  }

  handleChange = (e) => {
    this.setState({bday: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (

      <div className='eight-hours-container'>
        <div className='eight-hours-container-background'/>

        <div className='eight-hours-container-background-color'/>
        <BdayInput bday={this.state.bday} onSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>

      )
  }
}
export default EightHoursContainer;

