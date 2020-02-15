import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

const ERRORS_LIMIT = 3;
const QUESTIONS = [
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
    answers: [
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
    answers: [
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

describe(`<Main />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<Main
        errorsLimit={ERRORS_LIMIT}
        questions={QUESTIONS}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
