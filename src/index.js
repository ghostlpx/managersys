import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { getRoutesMap, rootRoutes } from './routes';
import './styles/common.less';
import Login from './login';
import Admin from './admin';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <HashRouter>
    <div>
      <Route path="/login" component={Login} />
      <Route path="/admin" render={(props) =>
        <Admin {...props} >
          <Switch>
            {getRoutesMap(rootRoutes)}
          </Switch>
        </Admin>
      }/>
    </div>
  </HashRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
