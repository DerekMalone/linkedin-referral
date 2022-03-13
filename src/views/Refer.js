import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import {
  addProfileRelationship,
  getAllProfiles,
} from '../api/data/profileData';

const initialState = {
  name1: '',
  name2: '',
  jobTitle: '',
  message: '',
  skills: '',
};

export default function Refer() {
  const history = useHistory();
  const [formInput, setFormInput] = useState(initialState);
  const [profiles, setProfiles] = useState([]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    addProfileRelationship({ ...formInput }).then(() => {
      history.push('/');
    });
  };

  useEffect(() => {
    let isMounted = true;
    getAllProfiles().then((profileArray) => {
      if (isMounted) setProfiles(profileArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    // form to connect the two people
    // connect button will post the profile relationship object to fb
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'left',
        height: 775,
        marginTop: 75,
      }}
    >
      <div
        style={{
          border: '1px solid gray',
          padding: 20,
          borderRadius: 10,
          width: 600,
        }}
      >
        <h2 style={{ marginTop: 10, borderBottom: 'solid 1px lightgray' }}>
          Make a Referral
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {profiles.map((profile) => (
            <div
              key={profile.firebaseKey}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: 20,
                marginBottom: 40,
                marginTop: 40,
              }}
            >
              <img
                style={{ borderRadius: 50, marginRight: 10 }}
                src={profile.photoURL}
                alt={profile.displayName}
              />
              <h5>{profile.displayName}</h5>
            </div>
          ))}
        </div>
        <Form onSubmit={handleClick}>
          <FormGroup>
            <Label for="name1">Who do you want to refer?*</Label>
            <Input
              style={{ marginBottom: 15 }}
              onChange={(e) => handleChange(e)}
              value={formInput.name1 || ''}
              type="text"
              name="name1"
              id="name1"
              // placeholder="Name 1..."
            />
            <Label for="name2">Who are you referring to?*</Label>
            <Input
              style={{ marginBottom: 15 }}
              onChange={(e) => handleChange(e)}
              value={formInput.name2 || ''}
              type="text"
              name="name2"
              id="name2"
              // placeholder="Name 2..."
            />
            <Label for="jobTitle">What role are you referring for?</Label>
            <Input
              style={{ marginBottom: 15 }}
              onChange={(e) => handleChange(e)}
              value={formInput.jobTitle || ''}
              type="text"
              name="jobTitle"
              id="jobTitle"
              // placeholder="Job Title..."
            />
            <Label for="message">Introduction Message*</Label>
            <Input
              style={{ marginBottom: 15 }}
              onChange={(e) => handleChange(e)}
              value={formInput.message || ''}
              type="textarea"
              name="message"
              id="message"
              // placeholder="Message..."
            />
            <Label for="skills">Relevant skills:</Label>
            <Input
              style={{ marginBottom: 15 }}
              onChange={(e) => handleChange(e)}
              value={formInput.skills || ''}
              type="text"
              name="skills"
              id="skills"
              // placeholder="Skills..."
            />
          </FormGroup>
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <Button
              style={{
                marginTop: 20,
                borderRadius: 20,
                height: 40,
                width: 110,
                textAlign: 'center',
                backgroundColor: '#0077b5',
              }}
            >
              Connect
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

// Refer.propTypes = {
//   obj: PropTypes.shape({}),
// };

// Refer.defaultProps = {
//   obj: {},
// };
