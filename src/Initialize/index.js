import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import Nav from '../components/Nav';
import Routes from '../routes/index';
import { signInUser } from '../api/auth';

function Initialize() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          fullName: authed.displayName,
          uid: authed.uid,
        };
        setUser(userObj);
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <>
          <Nav user={user} />
          <Routes user={user} />
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => {
              signInUser().then(() => {
                history.push('/');
              });
            }}
          >
            Sign In
          </button>
        </>
      )}
    </>
  );
}

export default Initialize;
