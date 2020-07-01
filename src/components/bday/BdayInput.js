import React  from 'react';
import { Link } from 'react-router-dom';
// import '../css/eight-hours.css';

export default props => (

  <div className="bday-input-form-container">
  <form className='bday-input-form' onSubmit={props.onSubmit}>
    <div className='bday-input-label'>IF YOUR LIFE LIVES TO 80, WHICH YOU MAY BE LUCKY TO DO, YOU COULD LOOK BACK AND IMAGINE THAT EACH DAY OF YOUR LIFE WAS A SECOND--YOUR LIFE WOULD BE 8HRS. WHT TM S T NW?</div>

    <label className='bday-input-label'>ENTER YOUR BIRTHDAY</label>

    <Link to={`results/${props.bday}` }>
      <button type="submit" id="results-button">
      </button>
    </Link>

    <input className='bday-input-field' placeholder="mm/dd/yyyy" onChange={props.handleChange} value={props.bday}/>

  </form>
</div>
)

// button above is hidden using the css
// it is a work around for using Link on submit form


