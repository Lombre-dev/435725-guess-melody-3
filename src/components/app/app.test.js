import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const errorsLimit = 3;

describe(`<App />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<App
        errorsLimit={errorsLimit}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
