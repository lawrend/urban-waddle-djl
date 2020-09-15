import React from 'react';


export default props => (
  <div className="flex-container-monkey-results">
    <div className="to-type">
    To Type: {props.toType}
    </div>
    <div className="results">
    Results: {props.results}
    </div>
  </div>
)


  // <div className={props.name ? props.status : ""}>{props.name ? props.statusText : ""}</div>
