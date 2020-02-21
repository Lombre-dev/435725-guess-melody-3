import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import AudioPlayer from './audio-player';

Enzyme.configure({
  adapter: new Adapter(),
});

const ID = 0;
const IS_PLAYING = false;
const IS_DISABLED = false;
const SRC = require(`path`).resolve(`public/samples/slade_sample.ogg`);

describe(`<AudioPlayer />`, () => {

  it(`play button should be clicked`, () => {

    const handleEvent = jest.fn();

    const result = mount(<AudioPlayer
      id={ID}
      isPlaying={IS_PLAYING}
      isDisabled={IS_DISABLED}
      src={SRC}
      onPlay={handleEvent}
      onCanPlayThrough={handleEvent}
      onPause={handleEvent}
      onEnd={handleEvent}
      onPlayButtonClick={handleEvent}
    />);

    result
      .find(`.track__button`)
      .simulate(`click`);

    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it(`component should be switched to play state`, () => {

    const isPlaying = false;
    const handlePlay = jest.fn();
    const handlePause = jest.fn();
    const handleEvent = jest.fn();

    jest.spyOn(HTMLMediaElement.prototype, `play`).mockImplementation(handlePlay);
    jest.spyOn(HTMLMediaElement.prototype, `pause`).mockImplementation(handlePause);

    const result = mount(<AudioPlayer
      id={ID}
      isPlaying={isPlaying}
      isDisabled={IS_DISABLED}
      src={SRC}
      onPlay={handleEvent}
      onPause={handleEvent}
      onCanPlayThrough={handleEvent}
      onEnd={handleEvent}
      onPlayButtonClick={handleEvent}
    />);

    result
      .setProps({
        isPlaying: true,
      });

    expect(handlePlay).toHaveBeenCalledTimes(1);
  });

  it(`component should be switched to pause state`, () => {

    const isPlaying = true;
    const handlePlay = jest.fn();
    const handlePause = jest.fn();
    const handleEvent = jest.fn();

    jest.spyOn(HTMLMediaElement.prototype, `play`).mockImplementation(handlePlay);
    jest.spyOn(HTMLMediaElement.prototype, `pause`).mockImplementation(handlePause);

    const result = mount(<AudioPlayer
      id={ID}
      isPlaying={isPlaying}
      isDisabled={IS_DISABLED}
      src={SRC}
      onPlay={handleEvent}
      onPause={handleEvent}
      onCanPlayThrough={handleEvent}
      onEnd={handleEvent}
      onPlayButtonClick={handleEvent}
    />);

    result
      .setProps({
        isPlaying: false,
      });

    expect(handlePause).toHaveBeenCalledTimes(1);
  });
});
