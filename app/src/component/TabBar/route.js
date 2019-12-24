
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Douyin from './../../pages/Douyin';
import Comp from './../../pages/Comps';

const routeList = [
    {path: '/', component: Douyin},
    {path: '/video', component: Douyin},
    {path: '/comp', component: Comp},
];

export const ContentRoute = () =>
  <Switch>
        <Route exact path='/' component={routeList[0].component}/>
        {
          	routeList.map((item, index) => 
          		  <Route exact path={item.path} component={item.component} key={index}/>
          	)
        }
  </Switch>

export default ContentRoute;