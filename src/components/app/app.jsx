import PropTypes from "prop-types";
import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";


const App = ({errorsLimit}) => {
  return (
    <WelcomeScreen errorsLimit={errorsLimit} />
  );
};

App.propTypes = {
  errorsLimit: PropTypes.number.isRequired,
};

export default App;
