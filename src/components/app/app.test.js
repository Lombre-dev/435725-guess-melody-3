import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const ERRORS_LIMIT = 3;
const QUESTION_LIST = [
  {
    type: `artist`,
    track: {
      artist: {
        name: `Artist 1`,
        image: ``,
      },
      title: `Title 1`,
      genre: `pop`,
      src: ``
    },
    artistList: [
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
    ],
  },
  {
    type: `genre`,
    genre: `rock`,
    trackList: [
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
    ],
  },
];

describe(`<App />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<App
        errorsLimit={ERRORS_LIMIT}
        questionList={QUESTION_LIST}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
