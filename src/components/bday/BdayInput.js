import React  from 'react';
import { Link } from 'react-router-dom';
// import '../css/eight-hours.css';

export default props => (

  <div className="bday-input-form-container">
  <form className='bday-input-form' onSubmit={props.onSubmit}>
    <code>
    <div className='bday-input-label'><p>IF YOUR LIFE LIVES TO 80</p><p>1 AVG LIFE = 80 YEARS</p><p>IF 1 DAY = 1 SECOND</p><p>80 YEARS = 8 HOURS</p></div>

    <label className='bday-input-label'>ENTER YOUR BIRTHDAY</label>

    <Link to={`results/${props.bday}` }>
      <button type="submit" id="results-button">
      </button>
    </Link>

    <input className='bday-input-field' placeholder="mm/dd/yyyy" onChange={props.handleChange} value={props.bday}/>
  </code>
  </form>
</div>
)

// button above is hidden using the css
// it is a work around for using Link on submit form


