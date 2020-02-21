import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen';

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
const HANDLE_CLICK = () => {};

describe(`<ArtistQuestionScreen />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<ArtistQuestionScreen
        question={QUESTION}
        onAnswer={HANDLE_CLICK}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
