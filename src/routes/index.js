import React from 'react';
import PropTypes from 'prop-types';
import AuthedRoutes from './AuthedRoutes';

export default function Routes({ user }) {
  return <>{user ? <AuthedRoutes user={user} /> : ''}</>;
}

Routes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Routes.defaultProps = {
  user: null,
};
