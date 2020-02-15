import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ArtistQuestionAnswer from './artist-question-answer';

Enzyme.configure({
  adapter: new Adapter(),
});

const INDEX = 0;
const ARTIST = {
  name: `Artist 1`,
  image: ``,
};

describe(`<ArtistQuestionAnswer />`, () => {

  it(`select callback should be called`, () => {

    const handleSelect = jest.fn();

    const result = shallow(<ArtistQuestionAnswer
      index={INDEX}
      artist={ARTIST}
      onSelectCallback={handleSelect}
    />);

    result
      .find(`.artist__input`)
      .simulate(`change`);

    expect(handleSelect).toHaveBeenCalledTimes(1);
  });
});
