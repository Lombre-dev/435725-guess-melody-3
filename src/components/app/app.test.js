import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const errorsLimit = 3;

describe(`<App />`, () => {

  it(`match pattern`, () => {

    const result = renderer
      .create(<App
        errorsLimit={errorsLimit}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
