import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import AudioPlayer from './audio-player';

Enzyme.configure({
  adapter: new Adapter(),
});

const ID = 0;
const IS_DISABLED = false;
const SRC = require(`path`).resolve(`public/samples/slade_sample.ogg`);

describe(`<AudioPlayer />`, () => {

  it(`component should be switched to play state`, () => {

    const isPlaying = false;
    const handlePlay = jest.fn();
    const handleEvent = jest.fn();

    jest.spyOn(HTMLMediaElement.prototype, `play`).mockImplementation(() => {});
    jest.spyOn(HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});

    const result = mount(<AudioPlayer
      id={ID}
      src={SRC}
      isPlaying={isPlaying}
      isDisabled={IS_DISABLED}
      onPlay={handlePlay}
      onPause={handleEvent}
      onCanPlayThrough={handleEvent}
      onEnd={handleEvent}
    />);

    result
      .find(`.track__button`)
      .simulate(`click`);

    expect(handlePlay).toHaveBeenCalledTimes(1);
  });

  it(`component should be switched to pause state`, () => {

    const isPlaying = true;
    const handlePause = jest.fn();
    const handleEvent = jest.fn();

    jest.spyOn(HTMLMediaElement.prototype, `play`).mockImplementation(() => {});
    jest.spyOn(HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});

    const result = mount(<AudioPlayer
      id={ID}
      isPlaying={isPlaying}
      isDisabled={IS_DISABLED}
      src={SRC}
      onPlay={handleEvent}
      onPause={handlePause}
      onCanPlayThrough={handleEvent}
      onEnd={handleEvent}
    />);

    result
      .find(`.track__button`)
      .simulate(`click`);

    expect(handlePause).toHaveBeenCalledTimes(1);
  });
});
