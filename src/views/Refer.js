import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { addProfileRelationship } from '../api/data/profileData';

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
  return (
    // form to connect the two people
    // connect button will post the profile relationship object to fb
    <>
      <div>
        <h1>Make a Referral</h1>
        <Form onSubmit={handleClick}>
          <FormGroup>
            <Label for="name1">Name 1:</Label>
            <Input
              onChange={(e) => handleChange(e)}
              value={formInput.name1 || ''}
              type="text"
              name="name1"
              id="name1"
              placeholder="Name 1..."
            />
            <Label for="name2">Name 2:</Label>
            <Input
              onChange={(e) => handleChange(e)}
              value={formInput.name2 || ''}
              type="text"
              name="name2"
              id="name2"
              placeholder="Name 2..."
            />
            <Label for="jobTitle">Job Title:</Label>
            <Input
              onChange={(e) => handleChange(e)}
              value={formInput.jobTitle || ''}
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="Job Title..."
            />
            <Label for="message">Message:</Label>
            <Input
              onChange={(e) => handleChange(e)}
              value={formInput.message || ''}
              type="text"
              name="message"
              id="message"
              placeholder="Message..."
            />
            <Label for="skills">Skills:</Label>
            <Input
              onChange={(e) => handleChange(e)}
              value={formInput.skills || ''}
              type="text"
              name="skills"
              id="skills"
              placeholder="Skills..."
            />
          </FormGroup>
          <Button>Connect</Button>
        </Form>
      </div>
    </>
  );
}

// Refer.propTypes = {
//   obj: PropTypes.shape({}),
// };

// Refer.defaultProps = {
//   obj: {},
// };
