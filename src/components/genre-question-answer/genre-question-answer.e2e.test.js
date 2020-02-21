import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import GenreQuestionAnswer from './genre-question-answer';

Enzyme.configure({
  adapter: new Adapter(),
});

const INDEX = 0;
const TRACK = {
  artist: {
    name: `Artist 1`,
    image: ``,
  },
  genre: `rock`,
  title: `Title 1`,
  src: ``
};
const CHECKED = false;


describe(`<GenreQuestionAnswer />`, () => {

  it(`select callback should be called`, () => {

    const handleSelect = jest.fn();
    const simulateParams = {
      target: {
        checked: true,
      }
    };

    const result = shallow(<GenreQuestionAnswer
      index={INDEX}
      track={TRACK}
      checked={CHECKED}
      onSelect={handleSelect}
    />);

    result
      .find(`.game__input`)
      .simulate(`change`, simulateParams);

    expect(handleSelect).toHaveBeenCalledTimes(1);
  });
});
