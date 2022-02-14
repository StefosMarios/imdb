import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'app/modules/controllers/home/home';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFound from 'app/shared/error/page-not-found';
import Movies from 'app/modules/controllers/movies/movies';
import Favorites from 'app/modules/controllers/favorites/favorites';

const Routes = () => {
  return (
    <div className="view-routes">
      <Switch>
        <ErrorBoundaryRoute path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/favorites" component={Favorites} />
        <ErrorBoundaryRoute component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
