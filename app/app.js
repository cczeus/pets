import React, { Component } from 'react';
import { Link, IndexRoute, browserHistory, BrowserRouter, Route, Switch, hashHistory, Router, HashRouter } from 'react-router';
import { createHistory } from 'history';


import SearchPage from './containers/SearchPage';
import DescriptionPage from './containers/DescriptionPage';
import DescriptionPageRabbit from './containers/DescriptionPageRabbit';

import injectFonts from './utils/injectFonts';
import history from './utils/history';


injectFonts();

class App extends Component {
  componentDidMount() {
    // force an update if the URL changes
    history.listen(() => this.forceUpdate());
  }
  render() {
    return (    
      <div>
      <Router history={browserHistory}>
        <Route path="/" component={SearchPage} />
         <Route path="/Cat" component={DescriptionPage} />
         <Route path="/Dog" component={DescriptionPageRabbit} />
      </Router>
     
      </div>
    );
  }
}
export default App;
