import React from 'react';
import { Route } from 'react-router-dom';
import DataNav from '../pages/DataNav';
import DataManage from '../pages/DataManage';
import TaskNav from '../pages/TaskNav';
import AnalysisNav from '../pages/AnalysisNav';


const rootRoutes = [{
  path: '/admin',
  render: (props) => <DataNav {...props}/>,
  exact: true,
}, {
  path: '/admin/data',
  component: DataNav,
}, {
  path: '/admin/task',
  component: TaskNav,
}, {
  path: '/admin/analysis',
  component: AnalysisNav,
}];

const siderRoutes = [{
  path: '/admin/data/dataManage',
  component: DataManage,
}];

const getRoutesMap = (routes) => {
  return routes.map((route) => 
    <Route
      key={route.path}
      exact={route.exact}
      render={route.render}
      path={route.path}
      component={route.component}
    />
  )
};

export { rootRoutes, siderRoutes, getRoutesMap };