import React from "react";
import WelcomeScreen, {WelcomeScreenPropTypes} from "../welcome-screen/welcome-screen.jsx";


const App = ({errorsLimit}) => {
  return (
    <WelcomeScreen errorsLimit={errorsLimit} />
  );
};

// решение без вынесения типов в отдельный файл
App.propTypes = WelcomeScreenPropTypes;

export default App;
