import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ArtistQuestionScreen from './artist-question-screen';

Enzyme.configure({
  adapter: new Adapter(),
});

const TRACK = {
  artist: {
    name: `Artist 1`,
    image: ``,
  },
  title: `Title 1`,
  genre: `pop`,
  src: ``
};
const ARTISTS = [
  {
    name: `Artist 1`,
    image: ``,
  },
  {
    name: `Artist 2`,
    image: ``,
  },
  {
    name: `Artist 3`,
    image: ``,
  },
  {
    name: `Artist 4`,
    image: ``,
  },
];

describe(`<ArtistQuestionScreen />`, () => {

  it(`answer callback should be called`, () => {

    const handleAnswer = jest.fn();

    const result = shallow(<ArtistQuestionScreen
      track={TRACK}
      artistList={ARTISTS}
      onAnswerCallback={handleAnswer}
    />);

    result
      .find(`.artist__input`)
      .at(0)
      .simulate(`change`);

    expect(handleAnswer).toHaveBeenCalledTimes(1);
  });

  it(`user answer should be equal sample`, () => {

    const handleAnswer = jest.fn();
    const sample = {
      answer: 1,
    };

    const result = shallow(<ArtistQuestionScreen
      track={TRACK}
      artistList={ARTISTS}
      onAnswerCallback={handleAnswer}
    />);

    result
      .find(`.artist__input`)
      .at(1)
      .simulate(`change`);

    expect(handleAnswer.mock.calls[0][0]).toMatchObject(sample);
  });
});
