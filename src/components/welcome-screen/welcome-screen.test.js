import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

const errorsLimit = 3;
const handleWelcomeButtonClick = () => {};

describe(`<WelcomeScreen />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<WelcomeScreen
        errorsLimit={errorsLimit}
        onWelcomeButtonClick={handleWelcomeButtonClick}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
