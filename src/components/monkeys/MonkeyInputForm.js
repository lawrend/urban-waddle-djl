import React  from 'react';

export default props => (
  <div className='monkey-input-form-container'>
  <form className='monkey-input-form' onSubmit={props.onSubmit}>

    <label className='monkey-input-label'>Type something here</label>

    <input className='monkey-input-field' placeholder="type here + press enter" onChange={props.handleChange} />
      <button type="submit" id="monkey-results-button">Start Monkeys
      </button>
  </form>
</div>
 )

