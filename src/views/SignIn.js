import React from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser } from '../api/auth';

export default function SignIn() {
  const history = useHistory();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          signInUser().then(() => {
            history.push('/profile');
          });
        }}
      >
        Sign In
      </button>
    </>
  );
}
