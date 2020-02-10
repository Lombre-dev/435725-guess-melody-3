/* eslint-disable react/prop-types */
import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';


const App = ({errorsLimit}) => {
  return (
    <WelcomeScreen errorsLimit={errorsLimit} />
  );
};

export default App;
