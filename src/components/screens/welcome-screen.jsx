/* eslint-disable react/prop-types */
import React from 'react';


const WelcomeScreen = (props) => {

  const {errorsCount = 0} = props;

  return (
    <>
      <h1>WelcomeScreen</h1>
      <p>Count errors: {errorsCount}</p>
    </>
  );
};

export default WelcomeScreen;
