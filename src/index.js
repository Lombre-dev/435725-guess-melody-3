import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {ERRORS_LIMIT} from './mocks/data';

ReactDOM.render(<App errorsLimit={ERRORS_LIMIT} />, document.getElementById(`root`));
