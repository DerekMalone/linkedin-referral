import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Profile from '../views/Profile';
import Messages from '../views/Messages';
import Refer from '../views/Refer';

export default function AuthedRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/" component={() => <Profile user={user} />} />
      <Route
        exact
        path="/messages"
        component={() => <Messages user={user} />}
      />
      <Route exact path="/refer" component={() => <Refer user={user} />} />
    </Switch>
  );
}

AuthedRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AuthedRoutes.defaultProps = {
  user: null,
};
