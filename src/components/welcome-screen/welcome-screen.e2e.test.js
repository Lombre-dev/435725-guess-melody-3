import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import WelcomeScreen from './welcome-screen.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`<WelcomeScreen />`, () => {

  it(`simulate start game`, () => {

    const errorsLimit = 3;
    const handleWelcomeButtonClick = jest.fn();

    const result = shallow(<WelcomeScreen
      errorsLimit={errorsLimit}
      onWelcomeButtonClick={handleWelcomeButtonClick}
    />);

    result.find(`.welcome__button`).simulate(`click`);

    expect(handleWelcomeButtonClick).toHaveBeenCalledTimes(1);
  });
});
