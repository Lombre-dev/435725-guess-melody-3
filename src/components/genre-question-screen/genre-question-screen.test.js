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
const HANDLE_ANSWER = () => {};
const RENDER_AUDIO_PLAYER = () => {};

describe(`<GenreQuestionScreen />`, () => {

  it(`render should be match markup`, () => {

    const question = {
      genre: GENRE,
      answers: TRACKS,
    };

    const result = renderer
      .create(<GenreQuestionScreen
        question={question}
        onAnswerCallback={HANDLE_ANSWER}
        renderAudioPlayer={RENDER_AUDIO_PLAYER}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
