import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { getRoutesMap, rootRoutes } from './routes';
import { sysState } from './stores';
import './styles/common.less';
import Login from './login';
import Admin from './admin';


ReactDOM.render(
  <Provider sysState={sysState}>
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
    </HashRouter>
  </Provider>,
  document.getElementById('root'));
