import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { signOutUser } from '../api/auth';

export default function Nav({ user }) {
  const history = useHistory();

  return (
    <>
      {user ? (
        <div>
          <button type="button">
            <Link to="/">Profile</Link>
          </button>
          <button type="button">
            <Link to="/refer">Refer</Link>
          </button>
          <button type="button">
            <Link to="/messages">Messages</Link>
          </button>
          <button
            type="button"
            onClick={() => {
              signOutUser().then(() => {
                history.push('/');
              });
            }}
          >
            Sign Out
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

Nav.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Nav.defaultProps = {
  user: null,
};
