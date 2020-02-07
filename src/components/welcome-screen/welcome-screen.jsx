import PropTypes from 'prop-types';
import React from 'react';


const WelcomeScreen = (props) => {
  return (
    <>
      <h1>WelcomeScreen</h1>
      <p>Errors count: {props.errorsCount}</p>
    </>
  );
};

WelcomeScreen.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default WelcomeScreen;
