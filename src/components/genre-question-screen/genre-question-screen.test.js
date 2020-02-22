import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen';

const GENRE = `rock`;
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
const QUESTION = {
  genre: GENRE,
  answers: TRACKS,
};
const CURRENT_TRACK_ID = 0;
const HANDLE_CALLBACK = () => {};

describe(`<GenreQuestionScreen />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<GenreQuestionScreen
        question={QUESTION}
        currentTrackId={CURRENT_TRACK_ID}
        onPlay={HANDLE_CALLBACK}
        onPause={HANDLE_CALLBACK}
        onEnd={HANDLE_CALLBACK}
        onAnswer={HANDLE_CALLBACK}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
