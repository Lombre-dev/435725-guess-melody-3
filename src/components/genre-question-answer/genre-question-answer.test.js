import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionAnswer from './genre-question-answer';

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
const CURRENT_TRACK_ID = 0;
const CHECKED = false;
const HANDLE_CALLBACK = () => {};

describe(`<GenreQuestionAnswer />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<GenreQuestionAnswer
        index={INDEX}
        track={TRACK}
        checked={CHECKED}
        currentTrackId={CURRENT_TRACK_ID}
        onPlay={HANDLE_CALLBACK}
        onPause={HANDLE_CALLBACK}
        onEnd={HANDLE_CALLBACK}
        onSelect={HANDLE_CALLBACK}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
