/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import WelcomeScreen from '../screens/welcome-screen.jsx';


const App = (props) => {
  return (
    <WelcomeScreen errorsCount={props.errors.length} />
  );
};

export default App;
