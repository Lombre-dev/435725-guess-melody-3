import PropTypes from 'prop-types';
import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = ({errorsLimit}) => {
  return (
    <WelcomeScreen
      errorsLimit={errorsLimit}
      onWelcomeButtonClick={handleWelcomeButtonClick}
    />
  );
};

const handleWelcomeButtonClick = () => {
};

App.propTypes = {
  errorsLimit: PropTypes.number.isRequired,
};

export default App;
