import PropTypes from 'prop-types';
import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';


const App = (props) => {
  return (
    <WelcomeScreen errorsCount={props.errorsCount} />
  );
};

App.propTypes = {
  // число, количество ошибок для WelcomeScreen
  errorsCount: PropTypes.number.isRequired,
};

export default App;
