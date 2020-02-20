import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player';

const SRC = ``;
const IS_PLAYING = false;
const HANDLE_PLAY_BUTTON_CLICK = () => {};

describe(`<AudioPlayer />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<AudioPlayer
        src={SRC}
        isPlaying={IS_PLAYING}
        onPlayButtonClick={HANDLE_PLAY_BUTTON_CLICK}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
