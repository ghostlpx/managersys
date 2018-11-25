import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './styles/common.less';
import Admin from './admin';
import DataNav from './pages/DataNav';
import TaskNav from './pages/TaskNav';
import AnalysisNav from './pages/AnalysisNav';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter>
    <Admin>
      <Switch>
        <Route exact path="/" render={() => <DataNav/>} />
        <Route path="/data" component={DataNav} />
        <Route path="/task" component={TaskNav} />
        <Route path="/analysis" component={AnalysisNav} />
      </Switch>
    </Admin>
  </HashRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
