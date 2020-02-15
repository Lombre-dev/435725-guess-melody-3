import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionAnswer from './artist-question-answer';

const INDEX = 0;
const ARTIST = {
  name: `Artist 1`,
  image: ``,
};
const HANDLE_SELECT = () => {};

describe(`<ArtistQuestionAnswer />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<ArtistQuestionAnswer
        index={INDEX}
        artist={ARTIST}
        onSelectCallback={HANDLE_SELECT}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
