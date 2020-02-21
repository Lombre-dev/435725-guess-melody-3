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
const CHECKED = false;
const HANDLE_SELECT = () => {};
const RENDER_AUDIO_PLAYER = () => {};

describe(`<GenreQuestionAnswer />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<GenreQuestionAnswer
        index={INDEX}
        track={TRACK}
        checked={CHECKED}
        onSelectCallback={HANDLE_SELECT}
        renderAudioPlayer={RENDER_AUDIO_PLAYER}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
