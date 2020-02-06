import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';


const errorList = [
  {code: 1, message: `Message of error 1`},
  {code: 2, message: `Message of error 2`},
  {code: 3, message: `Message of error 3`},
  {code: 4, message: `Message of error 4`},
  {code: 5, message: `Message of error 5`},
];

ReactDOM.render(<App errors={errorList} />, document.getElementById(`root`));
