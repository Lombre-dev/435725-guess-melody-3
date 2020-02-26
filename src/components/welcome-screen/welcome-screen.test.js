import React from 'react';
import renderer from 'react-test-renderer';
import {WelcomeScreen} from './welcome-screen';

const ERRORS_LIMIT = 3;
const HANDLE_CLICK = () => {};

describe(`<WelcomeScreen />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<WelcomeScreen
        errorsLimit={ERRORS_LIMIT}
        onWelcomeButtonClick={HANDLE_CLICK}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
