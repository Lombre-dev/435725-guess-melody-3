import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {ERRORS_LIMIT} from './mocks/data';
import {QUESTION_LIST} from './mocks/questions';

ReactDOM.render(<App
  errorsLimit={ERRORS_LIMIT}
  questionList={QUESTION_LIST}
/>, document.getElementById(`root`));
