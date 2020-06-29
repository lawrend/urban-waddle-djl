import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import BaseContainer from './containers/BaseContainer.js';
import ErrorRoute from './components/ErrorRoute.js';
import ResultsDisplay from './containers/ResultsDisplay';
import EightHoursContainer from './containers/EightHoursContainer.js';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={BaseContainer} />
        <Route path="/wakeup" component={EightHoursContainer} />
        <Route path="/results/:month/:day/:year" component={ResultsDisplay} />
        <Route component={ErrorRoute} />

    </Switch>         )
}
};

export default withRouter(Routes);


// <Switch>
//         <Route exact path="/" component={App} />
//         <Route path="/home" component={Home} />
//         <Route path="/eight-hours" component={EightHoursContainer} />
//         <Route path="/results/:month/:day/:year" component={ResultsDisplay} />
//         <Route path="/ingredients-checker" component={IngredientsCheckerHome} />
//         <Route path="/about" component={About} />
//         <Route component={ErrorRoute} />
//  </Switch>

