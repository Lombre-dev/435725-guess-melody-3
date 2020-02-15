import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {ERRORS_LIMIT} from './mocks/data';
import {QUESTIONS} from './mocks/questions';

ReactDOM.render(<App
  errorsLimit={ERRORS_LIMIT}
  questions={QUESTIONS}
/>, document.getElementById(`root`));
