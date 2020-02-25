import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ArtistQuestionAnswer from '../artist-question-answer/artist-question-answer';
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
const QUESTION = {
  track: TRACK,
  answers: ARTISTS,
};
const CURRENT_TRACK_ID = 0;
const HANDLE_CALLBACK = () => {};

describe(`<ArtistQuestionScreen />`, () => {

  it(`answer callback should be called`, () => {

    const handleAnswer = jest.fn();

    const result = mount(<ArtistQuestionScreen
      question={QUESTION}
      currentTrackId={CURRENT_TRACK_ID}
      onPlay={HANDLE_CALLBACK}
      onPause={HANDLE_CALLBACK}
      onEnd={HANDLE_CALLBACK}
      onAnswer={handleAnswer}
    />);

    result
      .find(ArtistQuestionAnswer)
      .at(0)
      .find(`.artist__input`)
      .simulate(`change`);

    expect(handleAnswer).toHaveBeenCalledTimes(1);
  });

  it(`user answer should be equal sample`, () => {

    const handleAnswer = jest.fn();
    const sample = {
      question: QUESTION,
      answer: 1,
    };

    const result = mount(<ArtistQuestionScreen
      question={QUESTION}
      currentTrackId={CURRENT_TRACK_ID}
      onPlay={HANDLE_CALLBACK}
      onPause={HANDLE_CALLBACK}
      onEnd={HANDLE_CALLBACK}
      onAnswer={handleAnswer}
    />);

    result
      .find(ArtistQuestionAnswer)
      .at(1)
      .find(`.artist__input`)
      .simulate(`change`);

    expect(handleAnswer.mock.calls[0][0]).toMatchObject(sample);
  });
});
