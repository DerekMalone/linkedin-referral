import propTypes from 'prop-types';
import React from 'react';

export default function MessageComponent({ message }) {
  return (
    <div>
      {/* <h5>{mes}</h5> */}
      <p>{message.details}</p>
    </div>
  );
}

MessageComponent.propTypes = {
  message: propTypes.shape(propTypes.obj).isRequired,
};

// MessageComponent.defaultProps = { message: {} };
