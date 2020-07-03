import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import BaseContainer from './containers/BaseContainer.js';
import ErrorRoute from './components/ErrorRoute.js';
import ResultsDisplay from './containers/bday/ResultsDisplay';
import IngredientsCheckerHome from './containers/checker/IngredientsCheckerHome.js';
import EightHoursContainer from './containers/bday/EightHoursContainer.js';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={BaseContainer} />
        <Route exact path="/wakeup" component={EightHoursContainer} />
        <Route exact path="/checker" component={IngredientsCheckerHome} />
        <Route path="/results/:month/:day/:year" component={ResultsDisplay} />
        <Route component={ErrorRoute} />

    </Switch>         )
}
};

export default withRouter(Routes);

