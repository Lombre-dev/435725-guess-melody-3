import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

const errorsLimit = 3;
const handleWelcomeButtonClick = () => {};

describe(`<WelcomeScreen />`, () => {

  it(`match pattern`, () => {

    const result = renderer
      .create(<WelcomeScreen
        errorsLimit={errorsLimit}
        onWelcomeButtonClick={handleWelcomeButtonClick}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });

  // Можно обойтись без крайностей, но почему бы и нет :)
  // Нужны ли проверки на валидацию данных в snap тестах,
  // или при необходимости выносить в unit-test?
  it(`errors limit must be finite, positive, whole`, () => {

    const result = renderer
      .create(<WelcomeScreen
        errorsLimit={-NaN}
        onWelcomeButtonClick={handleWelcomeButtonClick}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
