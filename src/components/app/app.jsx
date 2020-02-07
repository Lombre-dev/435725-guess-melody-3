import PropTypes from 'prop-types';
import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';


const App = (props) => {
  return (
    <WelcomeScreen errorsLimit={props.errorsLimit} />
  );
};

App.propTypes = {
  // максимально допустимое число ошибок -> WelcomeScreen
  errorsLimit: PropTypes.number.isRequired,
};

export default App;
