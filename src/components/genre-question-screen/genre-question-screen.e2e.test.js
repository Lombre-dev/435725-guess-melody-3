import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import GenreQuestionScreen from './genre-question-screen';

Enzyme.configure({
  adapter: new Adapter(),
});

const TRACKS = [
  {
    artist: {
      name: `Artist 1`,
      image: ``,
    },
    title: `Title 1`,
    genre: `pop`,
    src: ``
  },
  {
    artist: {
      name: `Artist 2`,
      image: ``,
    },
    title: `Track 2`,
    genre: `rock`,
    src: ``,
  },
  {
    artist: {
      name: `Artist 3`,
      image: ``,
    },
    title: `Track 3`,
    genre: `rock`,
    src: ``,
  },
  {
    artist: {
      name: `Artist 4`,
      image: ``,
    },
    title: `Track 4`,
    genre: `rock`,
    src: ``,
  },
];

describe(`<GenreQuestionScreen />`, () => {

  it(`answer callback should be called`, () => {

    const handleAnswer = jest.fn();

    const result = shallow(<GenreQuestionScreen
      trackList={TRACKS}
      onAnswerCallback={handleAnswer}
    />);

    result
      .find(`.game__tracks`)
      .simulate(`submit`, {
        preventDefault() {}
      });

    expect(handleAnswer).toHaveBeenCalledTimes(1);
  });

  it(`user answer should be equal sample`, () => {

    const handleAnswer = jest.fn();
    const sample = {
      answer: [false, true, false, true],
    };

    const result = shallow(<GenreQuestionScreen
      trackList={TRACKS}
      onAnswerCallback={handleAnswer}
    />);

    const elements = result.find(`.game__input`);
    const simulateParams = {
      target: {
        checked: true,
      }
    };

    elements.at(1).simulate(`change`, simulateParams);
    elements.at(3).simulate(`change`, simulateParams);

    result.find(`.game__tracks`)
      .simulate(`submit`, {
        preventDefault() {}
      });

    expect(handleAnswer.mock.calls[0][0]).toMatchObject(sample);
  });
});
