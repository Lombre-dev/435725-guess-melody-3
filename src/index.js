import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';


const Settings = {
  ERRORS_LIMIT: 3,
};

ReactDOM.render(<App errorsLimit={Settings.ERRORS_LIMIT} />, document.getElementById(`root`));
