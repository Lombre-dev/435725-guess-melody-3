import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import AudioPlayer from './audio-player';

Enzyme.configure({
  adapter: new Adapter(),
});

const SRC = require(`path`).resolve(`public/samples/slade_sample.ogg`);

describe(`<AudioPlayer />`, () => {

  it(`play button should be clicked`, () => {

    const handleClick = jest.fn();

    const result = mount(<AudioPlayer
      isPlaying={false}
      src={SRC}
      onPlayButtonClick={handleClick}
    />);

    result
      .setState({
        isCanPlay: true,
      })
      .find(`.track__button`)
      .simulate(`click`);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it(`play button should be switched to pause and play state`, () => {

    const handleClick = jest.fn();
    const isPlaying = false;

    const result = mount(<AudioPlayer
      isPlaying={isPlaying}
      src={SRC}
      onPlayButtonClick={handleClick}
    />);

    result
      .setState({
        isCanPlay: true,
      });

    result
      .find(`.track__button--play`)
      .simulate(`click`);

    result
      .find(`.track__button--pause`)
      .simulate(`click`);

    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
