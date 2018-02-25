import React, { Component } from 'react';
import { Link, IndexRoute, browserHistory, BrowserRouter, Route, Switch, hashHistory, Router, HashRouter } from 'react-router';
import { createHistory } from 'history';


import SearchPage from './containers/SearchPage';

import injectFonts from './utils/injectFonts';
import history from './utils/history';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectFonts();
injectTapEventPlugin();

class App extends Component {
  componentDidMount() {
    // force an update if the URL changes
    history.listen(() => this.forceUpdate());
  }
  render() {
    return (    
      <Router history={browserHistory}>
        <Route path="/" component={SearchPage} />
      </Router>
    );
  }
}
export default App;
