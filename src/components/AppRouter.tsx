import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
      ))}
      <Redirect to={RouteNames.PERSONALCABINET_INFO} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
      ))}
      <Redirect to={RouteNames.MAIN} />
    </Switch>
  );
};

export default AppRouter;
