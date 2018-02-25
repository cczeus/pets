import React, { Component } from 'react';
import { Link, IndexRoute, browserHistory, BrowserRouter, Route, Switch, hashHistory, Router, HashRouter } from 'react-router';
import { createHistory } from 'history';


import SearchPage from './containers/SearchPage';
import BreedList from './containers/BreedList';
import DescriptionPage from './containers/DescriptionPage';
import DescriptionPageRabbit from './containers/DescriptionPageRabbit';

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
      <div>
      <Router history={browserHistory}>
        <Route path="/" component={SearchPage} />
        <Route path="/BreedList/:query" component={BreedList} />
        <Route path="/description" component={DescriptionPage} />
         <Route path="/Cats" component={DescriptionPage} />
         <Route path="/Dogs" component={DescriptionPageRabbit} />
      </Router>
     
      </div>
    );
  }
}
export default App;
