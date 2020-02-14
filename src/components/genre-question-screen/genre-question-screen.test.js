import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen';

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
const handleAnswer = () => {};

describe(`<GenreQuestionScreen />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<GenreQuestionScreen
        trackList={TRACKS}
        onAnswerCallback={handleAnswer}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
