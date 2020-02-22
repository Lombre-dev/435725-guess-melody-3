import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player';

const ID = 0;
const SRC = ``;
const IS_PLAYING = false;
const IS_DISABLED = false;
const HANDLE_EVENT = () => {};

describe(`<AudioPlayer />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<AudioPlayer
        id={ID}
        isPlaying={IS_PLAYING}
        isDisabled={IS_DISABLED}
        onCanPlayThrough={HANDLE_EVENT}
        onPlay={HANDLE_EVENT}
        onPause={HANDLE_EVENT}
        onEnd={HANDLE_EVENT}
        src={SRC}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
